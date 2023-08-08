import React from "react";
import FacultyNavbar from "../navbar/FacultyNavbar";
import { FiShoppingCart } from "react-icons/fi";
import Product from "../../pages/Product/Product";
import {
  Box,
  Heading,
  Flex,
  Icon,
  Badge,
  Button,
  useToast,
  Select,
  FormLabel,
} from "@chakra-ui/react";
import { db } from "../../firebase/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { MdFilterAlt } from "react-icons/md";
import { RoleContext } from "../../App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function Menu() {
  const [onfilter, setOFFfilter] = useState(false);
  const [newList, setNewList] = useState([]);
  const navigate = useNavigate();
  const toast = useToast();
  const { totalUniqueItems } = useCart();
  const role = useContext(RoleContext);
  const [itm, setItm] = useState([]);
  const [cat, setCat] = useState([]);
  const [orderlist, setOrderlist] = useState([]);
  const [showbUtton, setShowbutton] = useState(false);
  const getData = async () => {
    try {
      const res = await fetch("/showorders", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          credentials: "include",
        },
      });
      const data = await res.json();
      setOrderlist(data);
      const d = data.filter((item) => {
        return item.name === role.name && item.ishowed === false;
      });
      if (d.length) {
        setShowbutton(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleFilter = (e) => {
    if (!e.target.value) {
      return setOFFfilter(false);
    }
    const updated = itm.filter((element) => {
      return element.category === e.target.value.trim();
    });
    setNewList(updated);
    setOFFfilter(true);
  };

  const handleNOT = () => {
    getData();
    var orderlist2 = [];
    var notification = false;
    const filter = orderlist.filter((item) => {
      return (
        item.name === role.name &&
        item.ishowed === false &&
        item.orderStatus === "Done" &&
        item.paymentStatus === "Done"
      );
    });
    const f = orderlist.filter((item) => {
      return (
        item.name === role.name &&
        item.ishowed === false &&
        item.orderStatus !== "Done" &&
        item.paymentStatus !== "Done"
      );
    });
    console.log(f);
    if (f) {
      for (var a in f) {
        console.log(f[a]);
        toast({
          title: `Wait your Order Id : ${f[a].orderid} is still cooking ! `,
          position: "top-right",
          variant: "top-accent",
          status: "info",
          duration: 5000,
          isClosable: true,
        });
      }
    }
    orderlist2 = filter;
    let idd;
    var k = Object.keys(orderlist2);
    var b = [];
    b.push(k);
    b = b[0];
    let orderID;
    b = b.filter((item) => {
      console.log("b", b);
      return orderlist2[item];
    });
    if (filter.length !== 0) {
      for (var x in b) {
        orderID = orderlist2[x].orderid;
        idd = orderlist2[x]._id;
      }
      notification = true;
    }
    if (notification === true) {
      const updateShowNotification = async () => {
        try {
          const res = await fetch("/showNotification", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ishowed: true,
              _id: idd,
            }),
          });
          const data = await res.json();
          if (data === "200") {
            toast({
              title: `Your OrderId : ${orderID}, Go Get Your Food from Counter`,
              position: "top-right",
              variant: "top-accent",
              status: "success",
              duration: 10000,
              isClosable: true,
            });
          }
          setShowbutton(false);
        } catch (err) {
          console.log(err);
        }
      };
      updateShowNotification();
    }
  };

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "items"), (snapshot) => {
      let orderlist = [];
      snapshot.docs.forEach((doc) => {
        orderlist.push({ id: doc.id, ...doc.data() });
      });
      setItm(orderlist);
    });
    return unsub;
  }, []);

  const getData2 = async () => {
    try {
      const res = await fetch("/getcategories", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          credentials: "include",
        },
      });
      const data = await res.json();
      setCat(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
    getData2();
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       await getData();
  //       await getData2();
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <FacultyNavbar />
      <Flex justifyContent="space-between">
        <Heading as="h2" p="10" size="2xl">
          Menu Item
        </Heading>
        <Box p="8" display="flex" alignItems="center" gap="20px">
          <FormLabel>
            Filter <Icon as={MdFilterAlt} />
          </FormLabel>
          <Select placeholder="Select option" w="2xl" onChange={handleFilter}>
            {cat.map((item) => {
              return (
                <option key={item.id} value={item.category}>
                  {item.category}
                </option>
              );
            })}
          </Select>
        </Box>
        {/* {showbUtton && <Button onClick={handleNOT}>Get order</Button>} */}
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column-reverse"
          alignItems="center"
          mr="20"
        >
          <Link to="/faculty/item-page">
            <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"}></Icon>
          </Link>
          <Badge colorScheme="green">{totalUniqueItems}</Badge>
        </Box>
      </Flex>
      {onfilter ? <Product itm={newList} /> : <Product itm={itm} />}
    </>
  );
}

import React from "react";
import { Box, Heading, Flex, Select, FormLabel, Icon } from "@chakra-ui/react";
import StudentNavbar from "../navbar/StudentNavbar";
import ProductStudent from "../../pages/Product/ProductStudent";
import { db } from "../../firebase/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { MdFilterAlt } from "react-icons/md";
import { useState, useEffect } from "react";

export default function StudentMenu() {
  const [onfilter, setOFFfilter] = useState(false);
  const [newList, setNewList] = useState([]);
  const [itm, setItm] = useState([]);
  const [cat, setCat] = useState([]);

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
    getData2();
  }, []);

  return (
    <>
      <StudentNavbar />
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
        {/* <Box
          display="flex"
          justifyContent="center"
          flexDirection="column-reverse"
          alignItems="center"
          mr="20"
        > */}
        {/* <Link to="/faculty/item-page">
            <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"}></Icon>
          </Link> */}
        {/* <Badge colorScheme="green">{totalUniqueItems}</Badge> */}
        {/* </Box> */}
      </Flex>
      {onfilter ? (
        <ProductStudent itm={newList} />
      ) : (
        <ProductStudent itm={itm} />
      )}
    </>
  );
}

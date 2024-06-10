"use client";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { useEffect, useState } from "react";
import axios from "axios";

const UsersPage = () => {


  const [recommendations, setRecommendation] = useState([])

// useEffect dependencies daha sonrasında düzeltilmeli.

  useEffect(() => {
    console.log("start");
    axios
    .post(
      "http://127.0.0.1:8000/recommend",
      {
        purchases: ["Lays Klasik Patates Cipsi",
        "Erikli Maden Suyu",
        "Danone Muzlu Yoğurt",
        "Keskinoğlu Yumurta"],
      },

    )
    .then((response) => {
      setRecommendation(response.data.recommendations)
    })
    .catch((error) => {
      console.error(error);
    });
  }, []);
 

  return (
    <div className={styles.container}>
      
      <div className={styles.top}>
       
      </div>
       <table className={styles.table}>
        <thead>
          <tr>
            <td>Recommended Products</td>

          </tr>
        </thead>
        <tbody>
            {
              recommendations.map((product) => (
                <tr key={product}>
                  <td>
                <div className={styles.user}>
              {product}
                </div>
                </td>
              </tr>
              ))
            
            }

        </tbody>
      </table> 
      <Pagination />
     
    </div>
  );
};

export default UsersPage;

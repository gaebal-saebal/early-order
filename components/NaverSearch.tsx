'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

const NaverSearch = () => {
  const [search, setSearch] = useState(null);
  const axios = require('axios');
  // const client = axios.create({
  //   headers: {
  //     'X-Naver-Client-Id': process.env.NEXT_PUBLIC_SEARCH_CLIENTID,
  //     'X-Naver-Client-Secret': process.env.NEXT_PUBLIC_SEARCH_CLIENTSECRET,
  //   },
  //   responseType: 'json',
  // });
  const getData = () => {
    axios
      // client
      .get('https://openapi.naver.com/v1/search/local.json', {
        headers: {
          'X-Naver-Client-Id': 'zDhcifu_x3ZHDwBTw26P',
          'X-Naver-Client-Secret': 'bpZeT0yj_h',
          'Content-Type': 'application/json',
        },
        params: {
          query: '카페',
          display: 5,
          sort: 'random',
        },
      })
      .then((res: any) => {
        console.log(res);
      })
      .catch(
        (error: {
          toJSON: any;
          response: { data: any; status: any; headers: any };
          request: any;
          message: any;
        }) => {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.toJSON());
          } else {
            console.log('Error', error.message);
          }
        }
      );
  };

  useEffect(() => {
    getData();
  }, []);

  return <></>;
};

export default NaverSearch;

import React, { ReactNode, useEffect, useState } from "react";

import supabase from "./compunentConfig/supabase";

const tabletest = () => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      let { data } = await supabase.from("users").select("*");
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <body>
        <h2>HTML Table</h2>
        <table>
          <tr>
            <th>id</th>
            <th>username</th>
            <th>password</th>
            <th>email</th>
          </tr>

          {data.map(
            (item: {
              [x: string]: ReactNode;
              id:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | React.ReactFragment
                | React.ReactPortal
                | null
                | undefined;
              usename:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | React.ReactFragment
                | React.ReactPortal
                | null
                | undefined;
              pass:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | React.ReactFragment
                | React.ReactPortal
                | null
                | undefined;
              email:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | React.ReactFragment
                | React.ReactPortal
                | null
                | undefined;
            }) => (
              <tr>
                <td>{item.id}</td>
                <td>{item.username}</td>
                <td>{item.pass}</td>
                <td>{item.email}</td>
              </tr>
            )
          )}
        </table>
      </body>
    </>
  );
};
export default tabletest;

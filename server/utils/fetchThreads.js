import https from "https";

const fetchThreads = () => {
  return new Promise((resolve, reject) => {
    https
      .get("https://a.4cdn.org/po/2.json", (res) => {
        let data = "";

        res.on("data", (chunk) => {
            data += chunk;
        });

        res.on("end", () => {
          resolve(JSON.parse(data));
        });
      })
      .on("error", (error) => {
        reject(error);
      });
  });
};

export default fetchThreads;

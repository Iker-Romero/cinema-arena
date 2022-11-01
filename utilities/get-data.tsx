const getData = async (url: string, target: string | number) => {
  try {
    // type ShowType = {
    //   Title: string;
    //   Year: number;
    //   Runtime: string;
    //   Genre: string;
    //   Director: string;
    //   Plot: string;
    //   Type: string;
    // };

    const rawData = await fetch(url + target);
    const jsonData = await rawData.json();
    console.log(jsonData);
    return jsonData;
  } catch (error) {
    console.log(error);
  }
};

export default getData;

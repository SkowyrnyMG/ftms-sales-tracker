const axios = require('axios'); // eslint-disable-line

const options = {
  headers: { 'apiKey': process.env.REACT_APP_fireApi }, // eslint-disable-line
  timeout: 1000 * 60,
};

// ! For now this function won't be used. FireTMS server timeout is set up on 10 sec and because of that bigger responses cannot be handled

exports.handler = (event, context, callback) => {
  const response = async () => {
    await axios
      .get(
        `https://app.firetms.com/api/invoices/purchase/issued?dateOfSaleFrom=2021-02-01&dateOfSaleTo=2021-02-28`,
        options,
      )
      .then(async ({ data }) => {
        console.log(data);
        await callback(null, {
          statusCode: 200,
          body: JSON.stringify({
            data,
          }),
        });
      });
  };

  // response();
};

import { useState } from "react";
import "./Product.css";

const Product = () => {
  const [values, setValues] = useState({
    pno: "",
    pname: "",
    pprice: "",
  });
  const [submittedValues, setSubmittedValues] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
};

const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedValues(values);
    setValues({
        pno:"",
        pname:"",
        pprice:""
    })
  };

  return (
    <>
      <div className="product-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="Add-productNo">Product No: </label>
          <input
            type="text"
            name="pno"
            value={values.pno}
            onChange={handleChange}
          />
          <label htmlFor="Add-productName">Product Name: </label>
          <input
            type="text"
            name="pname"
            value={values.pname}
            onChange={handleChange}
          />
          <label htmlFor="Add-productPrice">Product Price: </label>
          <input
            type="text"
            name="pprice"
            value={values.pprice}
            onChange={handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
      {submittedValues && (
        <div className="submitted-values">
          <h3>Submitted Values:</h3>
          <p>Product No: {submittedValues.pno}</p>
          <p>Product Name: {submittedValues.pname}</p>
          <p>Product Price: {submittedValues.pprice}</p>
        </div>
      )}
    </>
  );
};

export default Product;

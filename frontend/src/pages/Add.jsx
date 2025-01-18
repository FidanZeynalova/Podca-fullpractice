import React from 'react'
import { Helmet } from 'react-helmet';
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FaDeleteLeft } from "react-icons/fa6";
import { useDeleteDataMutation, useGetDatasQuery, usePostDataMutation } from '../app/Slices/Slice';

let schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  img: yup.string().required("Image is required"),
  desc: yup.string().required("Description is required"),
});

function Add() {
  let { data, refetch, isLoading } = useGetDatasQuery()
  let [postData] = usePostDataMutation()
  let [deleteData] = useDeleteDataMutation()

  console.log(data);
  
 async function handleDelete(id) {
    await deleteData(id)
    refetch()
  }
  return (
    <>
      <Helmet>
        <link rel="icon" type="image/svg+xml" href="https://is.gd/RlZxWY" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Add Podca</title>
      </Helmet>
      <div className='Add'>
        <h1>Add Formu</h1>
        <Formik
          initialValues={{ name: '', img: '', desc: '' }}
          validationSchema={schema}

          onSubmit={async (values) => {
            await postData(values)
            refetch()
            values.name = ''
            values.img = ''
            values.desc = ''

          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type="text" name="name" placeholder="Enter Name" />
              <ErrorMessage name="namete" component="div" />

              <Field type="text" name="desc" placeholder="Enter Description" />
              <ErrorMessage name="desc" component="div" />

              <Field type="text" name="img" placeholder="Enter Image" />
              <ErrorMessage name="img" component="div" />

              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
        <table>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Delete</th>
          </tr>
          {
            isLoading ? (
              <h1>...Loading</h1>
            ) : (
              data.map((item) => (
                <tr>
                  <td><img src={item.img} alt="" style={{width:"100px"}}/></td>
                  <td>{item.name}</td>
                  <td onClick={()=>handleDelete(item._id)}><FaDeleteLeft /></td>
                </tr>
              ))
            )
          }
        </table>
      </div>
    </>
  )
}

export default Add

import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import postService from '../../services/postService';
import PageHeader from '../common/pageHeader';

import './createPost.scss';

const CreatePost = () => {
  const createPostSchema = yup.object().shape({
    text: yup.string().min(2).max(255).required(),
    image: yup.string().required(),
    // tags: yup.array(),
  });

//   const convertToFormData = (values) => {
//     const data = new FormData();
//     for (let key in values) {
//       Array.isArray(values[key])
//         ? values[key].forEach((value) => data.append(key + '[]', value))
//         : data.append(key, values[key]);
//     }
//     return data;
//   };

//   const doSubmit = async (values) => {
//     try {
//       const { history } = this.props;
//       const formData = this.convertToFormData(values);
//       await postService.createPost(formData);
//       history.push('/feed');
//       toast('You are now a Kdog user! sign in and join the party!', {
//         position: 'top-center',
//         type: 'success',
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };

  return (
    <div className="container">
      <PageHeader titleText="Create a New Post" />
      <div className="row">
        <div className="col-12">
          <h4 className="text-center">Share the love and memories here</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 m-auto">
          <Formik
            initialValues={{ text: '', image: '' }}
            validationSchema={createPostSchema}
            // onSubmit={(values) => {
            //   this.doSubmit(values);
            //           }}
            onSubmit={(values, { setSubmitting }) => {
                alert('Im working');
            }}>
            {(formik) => (
              <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="text">* Post Text:</label>
                  <input
                    id="text"
                    name="text"
                    className={'form-control'}
                    type="text"
                    {...formik.getFieldProps('text')}
                  />
                  {formik.touched.text && formik.errors.text ? (
                    <span className="text-danger">
                      {formik.errors.text}
                    </span>
                  ) : null}
                </div>
                <div className="form-group">
                  <label htmlFor="tmage">* Post Image:</label>
                  <input
                    id="image"
                    name="image"
                    className={'form-control'}
                    type="text"
                    {...formik.getFieldProps('image')}
                  />
                  {formik.touched.image && formik.errors.image ? (
                    <span className="text-danger">
                      {formik.errors.image}
                    </span>
                  ) : null}
                </div>
                {/* <div className="form-group">
                  <label htmlFor="postTags">* Post Tags:</label>
                  <input
                    id="postTags"
                    name="postTags"
                    className={'form-control'}
                    type="text"
                    {...formik.getFieldProps('postTags')}
                  />
                  {formik.touched.postTags && formik.errors.postTags ? (
                    <span className="text-danger">
                      {formik.errors.postTags}
                    </span>
                  ) : null}
                </div> */}
                <button type="submit" className="btn btn-primary kdog-button">
                  Create Post
                </button>
                <Link
                  className="btn btn-secondary kdog-cancel-button p-2 ml-2"
                  to="./feed">
                  Cancel
                </Link>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;

import React, { Component } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import TagsInput from 'react-tagsinput';
import { FaLightbulb } from 'react-icons/all';

import postService from '../../services/postService';
import PageHeader from '../common/pageHeader';

import './createPost.scss';

class CreatePost extends Component {
  state = { tags: [] };

  handleTagsChange = (tags) => {
    this.setState({
      tags: tags,
    });
  };

  convertToFormData = (values) => {
    const data = new FormData();
    for (let key in values) {
      Array.isArray(values[key])
        ? values[key].forEach((value) => data.append(key + '[]', value))
        : data.append(key, values[key]);
    }
    return data;
  };

  render() {
    return (
      <div className="container create-post">
        <PageHeader titleText="Create a New Post" className="text-center page-header" />
        <div className="row">
          <div className="col-12">
            <h4 className="text-center">Share the love and memories here</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 m-auto">
            <Formik
              initialValues={{ text: '', image: null, tags: [] }}
              validationSchema={yup.object().shape({
                text: yup
                  .string()
                  .min(2)
                  .max(255)
                  .required()
                  .label('Post text'),
                image: yup.mixed().required(),
                tags: yup.array(),
              })}
              onSubmit={async (values) => {
                try {
                  const { history } = this.props;
                  const formData = this.convertToFormData(values);
                  await postService.createPost(formData);
                  history.push('/feed');
                  toast('Your post was submitted! cheers!', {
                    position: 'top-center',
                    type: 'success',
                  });
                } catch (error) {
                  console.log(error);
                }
              }}>
              {(formik) => (
                <form
                  method="post"
                  encType="multipart/form-data"
                  onSubmit={formik.handleSubmit}
                  autoComplete="off"
                  noValidate="novalidate"
                >
                  <div className="form-group">
                    <label htmlFor="text">* Post Text:</label>
                    <input
                      id="text"
                      name="text"
                      className={'form-control'}
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.text}
                      // {...formik.getFieldProps('text')}
                    />
                    {formik.touched.text && formik.errors.text ? (
                      <span className="text-danger">{formik.errors.text}</span>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label htmlFor="image">* Post Image:</label>
                    <div className="custom-file overflow-hidden">
                      <input
                        type="file"
                        className="custom-file-input"
                        id="image"
                        name="image"
                        onChange={(event) => {
                          formik.setFieldValue(
                            'image',
                            event.currentTarget.files[0]
                          );
                          document.querySelector('#file-name').innerHTML =
                          event.currentTarget.files[0] && event.currentTarget.files[0].name;
                        }}
                      />
                      <span
                        className="custom-file-label"
                        id="file-name"
                        name="file-name">
                        Choose file
                      </span>
                    </div>
                    {formik.touched.image && formik.errors.image ? (
                      <span className="text-danger">{formik.errors.image}</span>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label htmlFor="tags">Post Tags:</label>
                    <TagsInput
                      value={this.state.tags}
                      id="tags"
                      name="tags"
                      className="form-control overflow-hidden tags-input"
                      onChange={(tags) => {
                        this.handleTagsChange(tags);
                        formik.setFieldValue('tags', tags);
                      }}
                    />
                    <div className="d-flex align-items-center">
                      <FaLightbulb className="custom-icon" />
                      <span>Press Enter/Delete to add/remove tags</span>
                    </div>
                    {formik.touched.tags && formik.errors.tags ? (
                      <span className="text-danger">{formik.errors.tags}</span>
                    ) : null}
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary kdog-submit-button">
                    Create Post
                  </button>
                  <Link
                    className="btn btn-primary kdog-cancel-button ml-2"
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
  }
}

export default CreatePost;

import React, { Component } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import TagsInput from 'react-tagsinput';
import { FaLightbulb } from 'react-icons/all';

import postService from '../../services/postService';
import PageHeader from '../common/pageHeader';

import './editPost.scss';

class EditPost extends Component {
  state = {
    text: '',
    image: null,
    tags: [],
    originalImageName: '',
    originalImageKey: '',
    originalImageLocation: '',
  };
  async componentDidMount() {
    const { post_id } = this.props.match.params;
    const post = await postService.getPost(post_id);

    this.setState({
      text: post.data.text,
      tags: post.data.tags,
      originalImageName: post.data.image,
      originalImageKey: post.data.imageKey,
      originalImageLocation: post.data.imageLocation
    });
  }

  handleTextChange = (text) => {
    this.setState({
      text: text,
    });
  };
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
    const { text, image, originalImageName, originalImageKey, tags } = this.state;
    return (
      <div className="container">
        <PageHeader
          titleText="Edit Your Post"
          className="text-center page-header"
        />
        <div className="row">
          <div className="col-12">
            <h4 className="text-center">Fill in your post details here</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 m-auto">
            <Formik
              initialValues={{
                text: text,
                image: image,
                tags: tags,
              }}
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
                const { post_id } = this.props.match.params;
                const { history } = this.props;
                try {
                  if (!this.state.image) {
                    values.image = await postService.getPostImage(originalImageKey);
                  }
                  const formData = this.convertToFormData(values);
                  await postService.editPost(post_id, formData);
                  history.push('/feed');
                  toast('Your post was updated successfully! cheers!', {
                    position: 'top-center',
                    type: 'success',
                  });
                } catch (error) {
                  console.log(error);
                }
              }}>
              {(formik) => (
                <form
                  method="POST"
                  encType="multipart/form-data"
                  onSubmit={formik.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="text">* Post Text:</label>
                    <input
                      id="text"
                      name="text"
                      className={'form-control'}
                      type="text"
                      value={this.state.text}
                      onChange={(event) => {
                        this.handleTextChange(event.target.value);
                        formik.setFieldValue('text', event.target.value);
                      }}
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
                          this.setState({
                            image: event.currentTarget.files[0],
                            imageName: event.currentTarget.files[0].name,
                          });
                          document.querySelector('#file-name').innerHTML =
                            event.currentTarget.files[0].name;
                        }}
                      />
                      <span
                        className="custom-file-label"
                        id="file-name"
                        name="file-name">
                        {this.state.imageName || originalImageName}
                      </span>
                    </div>
                    {formik.touched.image && formik.errors.image ? (
                      <span className="text-danger">{formik.errors.image}</span>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label htmlFor="tags">Post Tags:</label>
                    <TagsInput
                      id="tags"
                      name="tags"
                      className="form-control overflow-hidden tags-input"
                      value={this.state.tags}
                      onChange={(tags) => {
                        formik.setFieldValue('tags', tags);
                        this.handleTagsChange(tags);
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
                    Update Post
                  </button>
                  <Link
                    className="btn btn-primary kdog-cancel-button ml-2"
                    to="/feed">
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

export default EditPost;

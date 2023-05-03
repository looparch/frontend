import React from 'react'
import * as Yup from 'yup'
import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik'
import { Turnstile } from '@marsidev/react-turnstile'
import usePublishedManufacturers from '../hooks/use-published-manufacturers'

const contactUsSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too short!').required('Required'),
  eml: Yup.string().email('Invalid email').required('Required'),
  manufacturer: Yup.string(),
  message: Yup.string().required('Required'),
  project_name: Yup.string(),
  project_specifier: Yup.string(),
  token: Yup.string().min(3, 'Not valid').required('Bot verification required'),
})

// Shape of form values
interface FormValues {
  name: string
  eml: string
  message: string
  token: string
}

interface OtherProps {
  message: string
  handleSubmit: (values: FormValues) => void
  className?: string
  selectedManufacturer?: string
  manufacturer?: string
}

// Aside: You may see InjectedFormikProps<OtherProps, FormValues> instead of what comes below in older code.. InjectedFormikProps was artifact of when Formik only exported a HoC. It is also less flexible as it MUST wrap all props (it passes them through).
const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting, handleSubmit, className } = props

  const manufacturers = usePublishedManufacturers()

  return (
    <div className={className}>
      <Form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <label className="block">
          <span className="form-label">Your Name*:</span>
          <Field
            type="text"
            name="name"
            className="block w-full mt-1 form-input"
            autoComplete="name"
          />
          {touched.name && errors.name && (
            <div className="form-error">{errors.name}</div>
          )}
        </label>

        <label className="block">
          <span className="form-label">Your Email*:</span>
          <Field
            type="email"
            name="eml"
            className="block w-full mt-1 form-input"
            autoComplete="email"
          />
          {touched.eml && errors.eml && (
            <div className="form-error">{errors.eml}</div>
          )}
        </label>

        <label className="block">
          <span className="form-label">Manufacturer:</span>
          <Field
            type="text"
            name="manufacturer"
            as="select"
            className="block w-full mt-1 form-input"
          >
            <option value="None Selected">Select a manufacturer</option>
            {manufacturers.map((manufacturer: any) => (
              <option key={manufacturer.id} value={manufacturer.title}>
                {manufacturer.title}
              </option>
            ))}
          </Field>
        </label>

        <label className="block">
          <span className="form-label">Message*:</span>
          <Field
            type="text"
            name="message"
            as="textarea"
            className="block w-full mt-1 form-input"
            placeholder="Your message..."
            rows={5}
          />
          {touched.message && errors.message && (
            <div className="form-error">{errors.message}</div>
          )}
        </label>

        <label className="block">
          <span className="form-label">Project Name (if applicable):</span>
          <Field
            type="text"
            name="project_name"
            className="block w-full mt-1 form-input"
          />
        </label>

        <label className="block">
          <span className="form-label">Project Specifier (if applicable):</span>
          <Field
            type="text"
            name="project_specifier"
            className="block w-full mt-1 form-input"
          />
        </label>

        <label className="block">
          <span className="form-label">Verification:</span>
          <Turnstile
            siteKey={`${process.env.TURNSTILE_SITE_KEY}`}
            options={{
              theme: 'light',
            }}
            onSuccess={(data) => {
              props.setFieldValue('token', data)
            }}
          />
          {errors['token'] && (
            <div className="form-error">{errors['token']}</div>
          )}
        </label>

        {props.status === 'success' && (
          <div className="form-success">
            Thank you for reaching out! 😊 Your message has been sent.
          </div>
        )}
        {props.status === 'error' && (
          <div className="form-error">
            There was an error sending the message. 😟 Please reload the page
            and try again.
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting || props.status !== undefined}
          className="button"
        >
          Submit
        </button>
      </Form>
    </div>
  )
}

// The type of props MyForm receives
interface MyFormProps {
  className?: string
  manufacturer?: string
}

// Wrap our form with the withFormik HoC
const MyForm = withFormik<MyFormProps, FormValues>({
  // Transform outer props into form values
  mapPropsToValues: (props) => {
    return {
      name: '',
      eml: '',
      manufacturer: props.manufacturer || '',
      message: '',
      project_name: '',
      project_specifier: '',
      token: '',
    }
  },

  validationSchema: contactUsSchema,

  handleSubmit: async (values, formikBag) => {
    console.log(values)
    console.log(formikBag)
    fetch('http://127.0.0.1:8787/contact-form/', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(values),
    })
      .then((res) => {
        if (res.status === 200 && window !== undefined) {
          formikBag.setStatus('success')
        } else {
          formikBag.setStatus('error')
        }
      })
      .catch((error) => {
        formikBag.setStatus('error')
      })
  },
})(InnerForm)

// Use <MyForm /> wherevs
const FormContact = () => {
  return <MyForm />
}

export default FormContact

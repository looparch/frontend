import React from 'react'
import * as Yup from 'yup'
import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik'
import usePublishedManufacturers from '../hooks/use-published-manufacturers'

const contactUsSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too short!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  manufacturer: Yup.string(),
  message: Yup.string().required('Required'),
  project_name: Yup.string(),
  project_specifier: Yup.string(),
})

// Shape of form values
interface FormValues {
  name: string
  email: string
  message: string
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
  const {
    touched,
    errors,
    isSubmitting,
    message,
    handleSubmit,
    className,
    manufacturer,
  } = props

  console.log(props)
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
            name="email"
            className="block w-full mt-1 form-input"
            autoComplete="email"
          />
          {touched.email && errors.email && (
            <div className="form-error">{errors.email}</div>
          )}
        </label>

        <label className="block">
          <span className="form-label">Manufacturer:</span>
          <Field
            type="text"
            name="manufacturer"
            as="select"
            className="block w-full mt-1 form-input"
            placeholder="Select a manufacturer"
          >
            {/* <option value="none">Select a manufacturer</option> */}
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

        <button type="submit" disabled={isSubmitting} className="button">
          Submit
        </button>
      </Form>
    </div>
  )
}

// The type of props MyForm receives
interface MyFormProps {
  message: string // if this passed all the way through you might do this or make a union type
  className?: string
  manufacturer?: string
}

// Wrap our form with the withFormik HoC
const MyForm = withFormik<MyFormProps, FormValues>({
  // Transform outer props into form values
  mapPropsToValues: (props) => {
    return {
      name: '',
      email: '',
      manufacturer: props.manufacturer || '',
      message: '',
      project_name: '',
      project_specifier: '',
    }
  },

  validationSchema: contactUsSchema,

  handleSubmit: async (values) => {
    console.log('handleSubmit')
    // do submitting things
    await new Promise((r) => setTimeout(r, 500))
    console.log(JSON.stringify(values))
  },
})(InnerForm)

// Use <MyForm /> wherevs
const FormContact = ({ selected }: any) => {
  return <MyForm message="Contact Us" manufacturer={selected} />
}

export default FormContact

import { Formik, Form, Field } from "formik";
import { IoIosSearch } from "react-icons/io";
import { toast } from "react-hot-toast";

export default function SearchBar({ onSubmit }) {
  return (
    <header>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values, actions) => {
          if (values.query.trim() === "") {
            toast.error("Please enter a search query!", {
              position: "bottom-right",
            });
            return;
          } else {
            onSubmit(values.query.trim());
          }
          actions.resetForm();
        }}
      >
        <Form>
          <Field
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">
            <IoIosSearch />
          </button>
        </Form>
      </Formik>
    </header>
  );
}

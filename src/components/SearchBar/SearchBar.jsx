import { Formik, Form, Field } from "formik";
import { IoIosSearch } from "react-icons/io";
import { toast } from "react-hot-toast";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  return (
    <header className={css.box}>
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
        <Form className={css.form}>
          <Field
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={css.btn} type="submit">
            <IoIosSearch />
          </button>
        </Form>
      </Formik>
    </header>
  );
}

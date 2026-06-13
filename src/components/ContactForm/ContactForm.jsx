import { useId } from "react";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice.js";
import css from "./ContactForm.module.css";
const ContactForm = () => {
  const name = useId();
  const number = useId();
  const dispatch = useDispatch();
  const handler = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const cname = form.elements.contactname.value.trim();
    const cnumber = form.elements.contactnumber.value.trim();
    dispatch(
      addContact({
        id: nanoid(),
        name: cname,
        number: cnumber,
      }),
    );
    form.reset();
  };
  return (
    <>
      <form onSubmit={handler} className={css.form}>
        <label htmlFor={name}>Name</label>
        <input
          type="text"
          name="contactname"
          id={name}
          placeholder="Contact Name"
        />
        <label htmlFor={number}>Number</label>
        <input
          type="tel"
          name="contactnumber"
          id={number}
          placeholder="+90 555-55-55"
        />
        <button type="submit">Add Contact</button>
      </form>
    </>
  );
};

export default ContactForm;

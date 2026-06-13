import { useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";
const Contact = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();
  const filtered = contacts.filter((c) =>
    c.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <>
      {filtered.map((res) => (
        <li key={res.id} className={css.items}>
          <div>
            <p>
              <FaUser />
              {res.name}
            </p>
            <p>
              <FaPhone />
              {res.number}
            </p>
          </div>
          <button type="button" onClick={() => dispatch(deleteContact(res.id))}>
            Delete
          </button>
        </li>
      ))}
    </>
  );
};

export default Contact;

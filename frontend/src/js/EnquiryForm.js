import styles from "../styles/Home.module.css";
import logo from "../images/century.jpg";

function EnquiryForm() {
  return (
    <div className={styles.request}>
      <form className={styles.enquiryForm}>
        <div className={styles.personal}>
          <label>Personal Details</label>
          <input
            type="text"
            placeholder="Name"
            spellCheck="false"
            name="customerName"
            required
          ></input>
          <input
            type="email"
            placeholder="Email"
            spellCheck="false"
            name="customerEmail"
            required
          ></input>
          <input
            type="tel"
            placeholder="Phone number"
            spellCheck="false"
            name="customerPhone"
            required
          ></input>
        </div>

        <div className={styles.car}>
          <label>Car Details</label>
          <input
            type="text"
            placeholder="Car make"
            spellCheck="false"
            name="carBrand"
            required
          ></input>
          <input
            type="text"
            placeholder="Car model"
            spellCheck="false"
            name="carModel"
            required
          ></input>
          <input
            type="text"
            placeholder="Car year"
            spellCheck="false"
            name="carYear"
            required
          ></input>
        </div>

        <div className={styles.battery}>
          <label>Battery Dimensions</label>
          <input
            type="text"
            placeholder="Length"
            spellCheck="false"
            name="carBrand"
            required
          ></input>
          <input
            type="text"
            placeholder="Width"
            spellCheck="false"
            name="carModel"
            required
          ></input>
          <input
            type="text"
            placeholder="Height"
            spellCheck="false"
            name="carYear"
            required
          ></input>
        </div>

        <div className={styles.batteryImages}>
          <label>Battery Images</label>
          <label className={styles.instruction}>
            Attach 2-3 photos of your current car battery
          </label>
          <div className={styles.uploadBox}>
            <label for="batteryImages">
              <i class="fa-solid fa-arrow-up-from-bracket"></i>
            </label>
          </div>
          <input
            accept="image/*"
            id="batteryImages"
            className={styles.uploadImages}
            type="file"
            capture="environment"
            multiple="true"
          />
        </div>
      </form>

      <button className={styles.sendButton}>Send Request</button>
    </div>
  );
}

export default EnquiryForm;

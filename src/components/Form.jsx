import React from "react";
import "../style/style.css";

const Form = () => {
  return (
    <form className="border-b-2 border-gray-300" id="form-student">
      <div className="mb-4">
        <label className="label" htmlFor="input-name">
          Fullname
        </label>

        <input className="input" type="text" id="input-name" />
      </div>

      <div className="flex gap-5 mb-4">
        <div className="w-full">
          <label className="label" htmlFor="input-date">
            Birth Date
          </label>

          <input className="input" type="date" id="input-date" />
        </div>

        <div className="w-full">
          <label className="label" htmlFor="input-gender">
            Gender
          </label>

          <select className="input" id="input-gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </div>

      <div className="mb-4">
        <label className="label" htmlFor="input-prody">
          Program Study
        </label>

        <select className="input" id="input-prody">
          <option value="Ekonomi">Ekonomi</option>
          <option value="Manajemen">Manajemen</option>
          <option value="Akuntansi">Akuntansi</option>
          <option value="Administrasi Publik">Administrasi Publik</option>
          <option value="Administrasi Bisnis">Administrasi Bisnis</option>
          <option value="Hubungan Internasional">Hubungan Internasional</option>
          <option value="Teknik Sipil">Teknik Sipil</option>
          <option value="Arsitektur">Arsitektur</option>
          <option value="Matematika">Matematika</option>
          <option value="Fisika">Fisika</option>
          <option value="Informatika">Informatika</option>
        </select>
      </div>

      <div className="flex items-center justify-between mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          name="Add student"
          id="add-btn"
          value="Add student"
        >
          Add student
        </button>
      </div>
    </form>
  );
};

export default Form;

import React from "react";
import { Input, FormBtn } from "../Form";


const SearchForm = props => {
  return (
    <form>
      <div className="form-group">
        <label className="BookSearchLabel"><h3>Search For Book</h3></label>
        <br></br>
        <Input
          value={props.search}
          onChange={props.handleInputChange}
          name="search"
          placeholder="Enter name of the book"
        />
      </div>
      <FormBtn
        onClick={props.handleFormSubmit}
      >
        Submit 
              </FormBtn>
    </form>
  )
}
export default SearchForm
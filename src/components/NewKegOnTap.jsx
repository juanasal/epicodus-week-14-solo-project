import React from 'react';

function NewKegOnTap() {
  return(
    <div>
      <p>Add a new keg below:</p>
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          id='name'
          placeholder='Beer Name'
        />
        <input
          type='text'
          id='brand'
          placeholder='Brewery Brand'
        />
        <input
          type='text'
          id='type'
          placeholder='Brew Type'
        />
        <input
          type='integer'
          id='price'
          placeholder='Keg Price'
        />
        <input
          type='integer'
          id='alcoholContent'
          placeholder='Alcohol Content'
        />
        <input
          type='integer'
          id='pintsAvailable'
          placeholder='Total Pints in Keg'
        />
        <input
          type='integer'
          id='tapLocation'
          placeholder='Tap Location'
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default NewKegOnTap;

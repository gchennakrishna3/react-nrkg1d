import { createStore } from "redux";

const initialState = {
  activeDetails: {
    email: "",
    lat: "",
    lng: ""
  }
};

const detailsreducer = (state = initialState, action) => {
  switch (action.type) {
    case "setActive":
      return { ...state, activeDetails: action.activeDetails };
  }
};

const store = createStore(detailsreducer);

export { store };

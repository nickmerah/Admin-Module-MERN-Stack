export const fetchData = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_SERVER}/institution`
    );

    if (!response.ok) {
      throw new Error("Oops! Bad Request");
    }
    const datas = await response.json();
    return datas;
  } catch (error) {
    throw error;
  }
};

export const fetchSchool = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_SERVER}/school`);

    if (!response.ok) {
      throw new Error("Oops! Bad Request");
    }
    const datas = await response.json();
    return datas;
  } catch (error) {
    throw error;
  }
};

export const fetchDept = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_SERVER}/department`
    );

    if (!response.ok) {
      throw new Error("Oops! Bad Request");
    }
    const datas = await response.json();
    return datas;
  } catch (error) {
    throw error;
  }
};

export const fetchProgramme = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_SERVER}/programme`
    );

    if (!response.ok) {
      throw new Error("Oops! Bad Request");
    }
    const datas = await response.json();
    return datas;
  } catch (error) {
    throw error;
  }
};

export const fetchGroup = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_SERVER}/usergroups`
    );

    if (!response.ok) {
      throw new Error("Oops! Bad Request");
    }
    const datas = await response.json();
    return datas;
  } catch (error) {
    throw error;
  }
};

export const fetchAppFeefield = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_SERVER}/appfeefields`
    );

    if (!response.ok) {
      throw new Error("Oops! Bad Request");
    }
    const datas = await response.json();
    return datas;
  } catch (error) {
    throw error;
  }
};

export const fetchStates = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_SERVER}/states`);

    if (!response.ok) {
      throw new Error("Oops! Bad Request");
    }
    const datas = await response.json();
    return datas;
  } catch (error) {
    throw error;
  }
};

export const fetchLga = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_SERVER}/lga`);

    if (!response.ok) {
      throw new Error("Oops! Bad Request");
    }
    const datas = await response.json();
    return datas;
  } catch (error) {
    throw error;
  }
};

export const getAmtPaid = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_SERVER}/allamtpaid`
    );

    if (!response.ok) {
      throw new Error("Oops! Bad Request");
    }
    const datas = await response.json();
    return datas;
  } catch (error) {
    throw error;
  }
};

export const getAllApplicants = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_SERVER}/allapplicants`
    );

    if (!response.ok) {
      throw new Error("Oops! Bad Request");
    }
    const datas = await response.json();
    return datas;
  } catch (error) {
    throw error;
  }
};

export const getSubmittedApplicants = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_SERVER}/submittedapplicants`
    );

    if (!response.ok) {
      throw new Error("Oops! Bad Request");
    }
    const datas = await response.json();
    return datas;
  } catch (error) {
    throw error;
  }
};

export const getAllTransactions = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_SERVER}/alltransactions`
    );

    if (!response.ok) {
      throw new Error("Oops! Bad Request");
    }
    const datas = await response.json();
    return datas;
  } catch (error) {
    throw error;
  }
};

export const fetchApplicants = async (page) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_SERVER}/appbiodata?page=` + page
    );

    if (!response.ok) {
      throw new Error("Oops! Bad Request");
    }
    const datas = await response.json();
    return datas;
  } catch (error) {
    throw error;
  }
};

const yes = () => async (dispatch) => {
    try {
        dispatch ({ type: 'YES'})
    }
    catch (err) {
        console.log(err);
    }
};
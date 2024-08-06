$("#register-form").validate({
    rules: {
      name: {
        required: true,
        minlength: 3,
        maxlength: 10
      },
      email: {
        required: true
      },
      password: {
        required: true
      }
    },messages: {
        name: {
            required: "Name is required",
            minlength: "Name should be minimum 3 characters",
            maxlength: "Name should be less than 10 characters"
        }
    }
  });
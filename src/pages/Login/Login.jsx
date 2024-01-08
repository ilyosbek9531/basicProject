import React from "react";
import styles from "./Login.module.scss";
import { useForm } from "react-hook-form";
import Input from "../../Components/Form/Input/Input";
import Label from "Components/Label/Label";
import MainButton from "Components/MainButton/MainButton";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
    },
  });

  const onSubmit = async (data) => {
    localStorage.setItem("username", data.username);
    navigate("/");
    window.location.reload();
  };
  return (
    <div className={styles.login}>
      <div className={styles.login__image} />
      <div className={styles.login__form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles.login__form__content}
        >
          <Label label="Name*">
            <Input
              control={control}
              placeholder="Enter name"
              name="username"
              validation={{
                required: {
                  value: true,
                  message: "required",
                },
                validate: {
                  isOybek: (value) => {
                    if (value.toLowerCase() !== "oybek")
                      return "Invalid username";
                  },
                },
              }}
              errors={errors}
            />
          </Label>

          <MainButton
            type="submit"
            text="Submit"
            fullWidth
            variant="contained"
            loading={false}
          />
        </form>
      </div>
    </div>
  );
};

export default Login;

import { GLOBALS } from "../utils";

export const URL_API = GLOBALS.environment === 'dev'? 'http://localhost/gdbase-lms/server':'http://training.gdbase.be/server';

export const URL_LOGIN = `${URL_API}/login.php`;

export const URL_DELETE_USER = `${URL_API}/delete_user.php`;

export const URL_GET_ACTIVE_USERS = `${URL_API}/get_active_users.php`;

export const URL_GET_ALL_USERS = `${URL_API}/get_all_users.php`;

export const URL_CHECK_USERNAME_AVAILABILITY = `${URL_API}/username-avalibility.php`;

export const URL_CHECK_EMAIL_AVAILABILITY = `${URL_API}/email-avalibility.php`;

export const URL_ADD_USER = `${URL_API}/add-user.php`;

export const URL_GET_USER = `${URL_API}/get-user.php`;

export const URL_CHANGE_PASSWORD = `${URL_API}/change-password.php`;

export const URL_SEND_PASSWORD_REST_MAIL = `${URL_API}/password-reset-mail.php`;
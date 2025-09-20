# better_auth.EmailOtpApi

All URIs are relative to *http://localhost:3000/api/auth*

Method | HTTP request | Description
------------- | ------------- | -------------
[**email_otp_check_verification_otp_post**](EmailOtpApi.md#email_otp_check_verification_otp_post) | **POST** /email-otp/check-verification-otp | 
[**email_otp_reset_password_post**](EmailOtpApi.md#email_otp_reset_password_post) | **POST** /email-otp/reset-password | 
[**email_otp_send_verification_otp_post**](EmailOtpApi.md#email_otp_send_verification_otp_post) | **POST** /email-otp/send-verification-otp | 
[**email_otp_verify_email_post**](EmailOtpApi.md#email_otp_verify_email_post) | **POST** /email-otp/verify-email | 
[**forget_password_email_otp_post**](EmailOtpApi.md#forget_password_email_otp_post) | **POST** /forget-password/email-otp | 
[**sign_in_email_otp_post**](EmailOtpApi.md#sign_in_email_otp_post) | **POST** /sign-in/email-otp | 


# **email_otp_check_verification_otp_post**
> SignOutPost200Response email_otp_check_verification_otp_post(email_otp_check_verification_otp_post_request)

Check if a verification OTP is valid

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.email_otp_check_verification_otp_post_request import EmailOtpCheckVerificationOtpPostRequest
from better_auth.models.sign_out_post200_response import SignOutPost200Response
from better_auth.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000/api/auth
# See configuration.py for a list of all supported configuration parameters.
configuration = better_auth.Configuration(
    host = "http://localhost:3000/api/auth"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = better_auth.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with better_auth.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = better_auth.EmailOtpApi(api_client)
    email_otp_check_verification_otp_post_request = better_auth.EmailOtpCheckVerificationOtpPostRequest() # EmailOtpCheckVerificationOtpPostRequest | 

    try:
        api_response = api_instance.email_otp_check_verification_otp_post(email_otp_check_verification_otp_post_request)
        print("The response of EmailOtpApi->email_otp_check_verification_otp_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmailOtpApi->email_otp_check_verification_otp_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email_otp_check_verification_otp_post_request** | [**EmailOtpCheckVerificationOtpPostRequest**](EmailOtpCheckVerificationOtpPostRequest.md)|  | 

### Return type

[**SignOutPost200Response**](SignOutPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **email_otp_reset_password_post**
> email_otp_reset_password_post(email_otp_reset_password_post_request)

Reset user password with OTP

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.email_otp_reset_password_post_request import EmailOtpResetPasswordPostRequest
from better_auth.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000/api/auth
# See configuration.py for a list of all supported configuration parameters.
configuration = better_auth.Configuration(
    host = "http://localhost:3000/api/auth"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = better_auth.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with better_auth.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = better_auth.EmailOtpApi(api_client)
    email_otp_reset_password_post_request = better_auth.EmailOtpResetPasswordPostRequest() # EmailOtpResetPasswordPostRequest | 

    try:
        api_instance.email_otp_reset_password_post(email_otp_reset_password_post_request)
    except Exception as e:
        print("Exception when calling EmailOtpApi->email_otp_reset_password_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email_otp_reset_password_post_request** | [**EmailOtpResetPasswordPostRequest**](EmailOtpResetPasswordPostRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **email_otp_send_verification_otp_post**
> SignOutPost200Response email_otp_send_verification_otp_post(email_otp_send_verification_otp_post_request)

Send verification OTP

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.email_otp_send_verification_otp_post_request import EmailOtpSendVerificationOtpPostRequest
from better_auth.models.sign_out_post200_response import SignOutPost200Response
from better_auth.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000/api/auth
# See configuration.py for a list of all supported configuration parameters.
configuration = better_auth.Configuration(
    host = "http://localhost:3000/api/auth"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = better_auth.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with better_auth.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = better_auth.EmailOtpApi(api_client)
    email_otp_send_verification_otp_post_request = better_auth.EmailOtpSendVerificationOtpPostRequest() # EmailOtpSendVerificationOtpPostRequest | 

    try:
        api_response = api_instance.email_otp_send_verification_otp_post(email_otp_send_verification_otp_post_request)
        print("The response of EmailOtpApi->email_otp_send_verification_otp_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmailOtpApi->email_otp_send_verification_otp_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email_otp_send_verification_otp_post_request** | [**EmailOtpSendVerificationOtpPostRequest**](EmailOtpSendVerificationOtpPostRequest.md)|  | 

### Return type

[**SignOutPost200Response**](SignOutPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **email_otp_verify_email_post**
> EmailOtpVerifyEmailPost200Response email_otp_verify_email_post(email_otp_verify_email_post_request)

Verify email with OTP

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.email_otp_verify_email_post200_response import EmailOtpVerifyEmailPost200Response
from better_auth.models.email_otp_verify_email_post_request import EmailOtpVerifyEmailPostRequest
from better_auth.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000/api/auth
# See configuration.py for a list of all supported configuration parameters.
configuration = better_auth.Configuration(
    host = "http://localhost:3000/api/auth"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = better_auth.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with better_auth.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = better_auth.EmailOtpApi(api_client)
    email_otp_verify_email_post_request = better_auth.EmailOtpVerifyEmailPostRequest() # EmailOtpVerifyEmailPostRequest | 

    try:
        api_response = api_instance.email_otp_verify_email_post(email_otp_verify_email_post_request)
        print("The response of EmailOtpApi->email_otp_verify_email_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmailOtpApi->email_otp_verify_email_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email_otp_verify_email_post_request** | [**EmailOtpVerifyEmailPostRequest**](EmailOtpVerifyEmailPostRequest.md)|  | 

### Return type

[**EmailOtpVerifyEmailPost200Response**](EmailOtpVerifyEmailPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **forget_password_email_otp_post**
> ForgetPasswordEmailOtpPost200Response forget_password_email_otp_post(forget_password_email_otp_post_request)

Send a password reset OTP to the user

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.forget_password_email_otp_post200_response import ForgetPasswordEmailOtpPost200Response
from better_auth.models.forget_password_email_otp_post_request import ForgetPasswordEmailOtpPostRequest
from better_auth.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000/api/auth
# See configuration.py for a list of all supported configuration parameters.
configuration = better_auth.Configuration(
    host = "http://localhost:3000/api/auth"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = better_auth.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with better_auth.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = better_auth.EmailOtpApi(api_client)
    forget_password_email_otp_post_request = better_auth.ForgetPasswordEmailOtpPostRequest() # ForgetPasswordEmailOtpPostRequest | 

    try:
        api_response = api_instance.forget_password_email_otp_post(forget_password_email_otp_post_request)
        print("The response of EmailOtpApi->forget_password_email_otp_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmailOtpApi->forget_password_email_otp_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **forget_password_email_otp_post_request** | [**ForgetPasswordEmailOtpPostRequest**](ForgetPasswordEmailOtpPostRequest.md)|  | 

### Return type

[**ForgetPasswordEmailOtpPost200Response**](ForgetPasswordEmailOtpPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sign_in_email_otp_post**
> SignInUsernamePost200Response sign_in_email_otp_post(sign_in_email_otp_post_request)

Sign in with OTP

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.sign_in_email_otp_post_request import SignInEmailOtpPostRequest
from better_auth.models.sign_in_username_post200_response import SignInUsernamePost200Response
from better_auth.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000/api/auth
# See configuration.py for a list of all supported configuration parameters.
configuration = better_auth.Configuration(
    host = "http://localhost:3000/api/auth"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = better_auth.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with better_auth.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = better_auth.EmailOtpApi(api_client)
    sign_in_email_otp_post_request = better_auth.SignInEmailOtpPostRequest() # SignInEmailOtpPostRequest | 

    try:
        api_response = api_instance.sign_in_email_otp_post(sign_in_email_otp_post_request)
        print("The response of EmailOtpApi->sign_in_email_otp_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmailOtpApi->sign_in_email_otp_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sign_in_email_otp_post_request** | [**SignInEmailOtpPostRequest**](SignInEmailOtpPostRequest.md)|  | 

### Return type

[**SignInUsernamePost200Response**](SignInUsernamePost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


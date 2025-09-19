# better_auth.PhoneNumberApi

All URIs are relative to *http://localhost:3000/api/auth*

Method | HTTP request | Description
------------- | ------------- | -------------
[**phone_number_forget_password_post**](PhoneNumberApi.md#phone_number_forget_password_post) | **POST** /phone-number/forget-password | 
[**phone_number_request_password_reset_post**](PhoneNumberApi.md#phone_number_request_password_reset_post) | **POST** /phone-number/request-password-reset | 
[**phone_number_reset_password_post**](PhoneNumberApi.md#phone_number_reset_password_post) | **POST** /phone-number/reset-password | 
[**phone_number_send_otp_post**](PhoneNumberApi.md#phone_number_send_otp_post) | **POST** /phone-number/send-otp | 
[**phone_number_verify_post**](PhoneNumberApi.md#phone_number_verify_post) | **POST** /phone-number/verify | 
[**sign_in_phone_number_post**](PhoneNumberApi.md#sign_in_phone_number_post) | **POST** /sign-in/phone-number | 


# **phone_number_forget_password_post**
> PhoneNumberForgetPasswordPost200Response phone_number_forget_password_post(phone_number_forget_password_post_request)

Request OTP for password reset via phone number

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.phone_number_forget_password_post200_response import PhoneNumberForgetPasswordPost200Response
from better_auth.models.phone_number_forget_password_post_request import PhoneNumberForgetPasswordPostRequest
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
    api_instance = better_auth.PhoneNumberApi(api_client)
    phone_number_forget_password_post_request = better_auth.PhoneNumberForgetPasswordPostRequest() # PhoneNumberForgetPasswordPostRequest | 

    try:
        api_response = api_instance.phone_number_forget_password_post(phone_number_forget_password_post_request)
        print("The response of PhoneNumberApi->phone_number_forget_password_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PhoneNumberApi->phone_number_forget_password_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phone_number_forget_password_post_request** | [**PhoneNumberForgetPasswordPostRequest**](PhoneNumberForgetPasswordPostRequest.md)|  | 

### Return type

[**PhoneNumberForgetPasswordPost200Response**](PhoneNumberForgetPasswordPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OTP sent successfully for password reset |  -  |
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **phone_number_request_password_reset_post**
> PhoneNumberForgetPasswordPost200Response phone_number_request_password_reset_post(phone_number_request_password_reset_post_request)

Request OTP for password reset via phone number

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.phone_number_forget_password_post200_response import PhoneNumberForgetPasswordPost200Response
from better_auth.models.phone_number_request_password_reset_post_request import PhoneNumberRequestPasswordResetPostRequest
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
    api_instance = better_auth.PhoneNumberApi(api_client)
    phone_number_request_password_reset_post_request = better_auth.PhoneNumberRequestPasswordResetPostRequest() # PhoneNumberRequestPasswordResetPostRequest | 

    try:
        api_response = api_instance.phone_number_request_password_reset_post(phone_number_request_password_reset_post_request)
        print("The response of PhoneNumberApi->phone_number_request_password_reset_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PhoneNumberApi->phone_number_request_password_reset_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phone_number_request_password_reset_post_request** | [**PhoneNumberRequestPasswordResetPostRequest**](PhoneNumberRequestPasswordResetPostRequest.md)|  | 

### Return type

[**PhoneNumberForgetPasswordPost200Response**](PhoneNumberForgetPasswordPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OTP sent successfully for password reset |  -  |
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **phone_number_reset_password_post**
> PhoneNumberResetPasswordPost200Response phone_number_reset_password_post(phone_number_reset_password_post_request)

Reset password using phone number OTP

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.phone_number_reset_password_post200_response import PhoneNumberResetPasswordPost200Response
from better_auth.models.phone_number_reset_password_post_request import PhoneNumberResetPasswordPostRequest
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
    api_instance = better_auth.PhoneNumberApi(api_client)
    phone_number_reset_password_post_request = better_auth.PhoneNumberResetPasswordPostRequest() # PhoneNumberResetPasswordPostRequest | 

    try:
        api_response = api_instance.phone_number_reset_password_post(phone_number_reset_password_post_request)
        print("The response of PhoneNumberApi->phone_number_reset_password_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PhoneNumberApi->phone_number_reset_password_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phone_number_reset_password_post_request** | [**PhoneNumberResetPasswordPostRequest**](PhoneNumberResetPasswordPostRequest.md)|  | 

### Return type

[**PhoneNumberResetPasswordPost200Response**](PhoneNumberResetPasswordPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Password reset successfully |  -  |
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **phone_number_send_otp_post**
> SocialSignIn403Response phone_number_send_otp_post(phone_number_send_otp_post_request)

Use this endpoint to send OTP to phone number

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.phone_number_send_otp_post_request import PhoneNumberSendOtpPostRequest
from better_auth.models.social_sign_in403_response import SocialSignIn403Response
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
    api_instance = better_auth.PhoneNumberApi(api_client)
    phone_number_send_otp_post_request = better_auth.PhoneNumberSendOtpPostRequest() # PhoneNumberSendOtpPostRequest | 

    try:
        api_response = api_instance.phone_number_send_otp_post(phone_number_send_otp_post_request)
        print("The response of PhoneNumberApi->phone_number_send_otp_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PhoneNumberApi->phone_number_send_otp_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phone_number_send_otp_post_request** | [**PhoneNumberSendOtpPostRequest**](PhoneNumberSendOtpPostRequest.md)|  | 

### Return type

[**SocialSignIn403Response**](SocialSignIn403Response.md)

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

# **phone_number_verify_post**
> PhoneNumberVerifyPost200Response phone_number_verify_post(phone_number_verify_post_request)

Use this endpoint to verify phone number

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.phone_number_verify_post200_response import PhoneNumberVerifyPost200Response
from better_auth.models.phone_number_verify_post_request import PhoneNumberVerifyPostRequest
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
    api_instance = better_auth.PhoneNumberApi(api_client)
    phone_number_verify_post_request = better_auth.PhoneNumberVerifyPostRequest() # PhoneNumberVerifyPostRequest | 

    try:
        api_response = api_instance.phone_number_verify_post(phone_number_verify_post_request)
        print("The response of PhoneNumberApi->phone_number_verify_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PhoneNumberApi->phone_number_verify_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phone_number_verify_post_request** | [**PhoneNumberVerifyPostRequest**](PhoneNumberVerifyPostRequest.md)|  | 

### Return type

[**PhoneNumberVerifyPost200Response**](PhoneNumberVerifyPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Phone number verified successfully |  -  |
**400** | Invalid OTP |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sign_in_phone_number_post**
> SignInAnonymousPost200Response sign_in_phone_number_post(sign_in_phone_number_post_request)

Use this endpoint to sign in with phone number

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.sign_in_anonymous_post200_response import SignInAnonymousPost200Response
from better_auth.models.sign_in_phone_number_post_request import SignInPhoneNumberPostRequest
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
    api_instance = better_auth.PhoneNumberApi(api_client)
    sign_in_phone_number_post_request = better_auth.SignInPhoneNumberPostRequest() # SignInPhoneNumberPostRequest | 

    try:
        api_response = api_instance.sign_in_phone_number_post(sign_in_phone_number_post_request)
        print("The response of PhoneNumberApi->sign_in_phone_number_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PhoneNumberApi->sign_in_phone_number_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sign_in_phone_number_post_request** | [**SignInPhoneNumberPostRequest**](SignInPhoneNumberPostRequest.md)|  | 

### Return type

[**SignInAnonymousPost200Response**](SignInAnonymousPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Invalid phone number or password |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


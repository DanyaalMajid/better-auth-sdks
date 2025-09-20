# better_auth.DefaultApi

All URIs are relative to *http://localhost:3000/api/auth*

Method | HTTP request | Description
------------- | ------------- | -------------
[**account_info_post**](DefaultApi.md#account_info_post) | **POST** /account-info | 
[**change_email_post**](DefaultApi.md#change_email_post) | **POST** /change-email | 
[**change_password_post**](DefaultApi.md#change_password_post) | **POST** /change-password | 
[**delete_user_callback_get**](DefaultApi.md#delete_user_callback_get) | **GET** /delete-user/callback | 
[**delete_user_post**](DefaultApi.md#delete_user_post) | **POST** /delete-user | 
[**error_get**](DefaultApi.md#error_get) | **GET** /error | 
[**forget_password_post**](DefaultApi.md#forget_password_post) | **POST** /forget-password | 
[**get_access_token_post**](DefaultApi.md#get_access_token_post) | **POST** /get-access-token | 
[**get_session_get**](DefaultApi.md#get_session_get) | **GET** /get-session | 
[**link_social_post**](DefaultApi.md#link_social_post) | **POST** /link-social | 
[**list_accounts_get**](DefaultApi.md#list_accounts_get) | **GET** /list-accounts | 
[**list_sessions_get**](DefaultApi.md#list_sessions_get) | **GET** /list-sessions | 
[**ok_get**](DefaultApi.md#ok_get) | **GET** /ok | 
[**refresh_token_post**](DefaultApi.md#refresh_token_post) | **POST** /refresh-token | 
[**request_password_reset_post**](DefaultApi.md#request_password_reset_post) | **POST** /request-password-reset | 
[**reset_password_post**](DefaultApi.md#reset_password_post) | **POST** /reset-password | 
[**reset_password_token_get**](DefaultApi.md#reset_password_token_get) | **GET** /reset-password/{token} | 
[**revoke_other_sessions_post**](DefaultApi.md#revoke_other_sessions_post) | **POST** /revoke-other-sessions | 
[**revoke_session_post**](DefaultApi.md#revoke_session_post) | **POST** /revoke-session | 
[**revoke_sessions_post**](DefaultApi.md#revoke_sessions_post) | **POST** /revoke-sessions | 
[**send_verification_email_post**](DefaultApi.md#send_verification_email_post) | **POST** /send-verification-email | 
[**sign_in_email_post**](DefaultApi.md#sign_in_email_post) | **POST** /sign-in/email | 
[**sign_out_post**](DefaultApi.md#sign_out_post) | **POST** /sign-out | 
[**sign_up_email_post**](DefaultApi.md#sign_up_email_post) | **POST** /sign-up/email | 
[**social_sign_in**](DefaultApi.md#social_sign_in) | **POST** /sign-in/social | 
[**unlink_account_post**](DefaultApi.md#unlink_account_post) | **POST** /unlink-account | 
[**update_user_post**](DefaultApi.md#update_user_post) | **POST** /update-user | 
[**verify_email_get**](DefaultApi.md#verify_email_get) | **GET** /verify-email | 


# **account_info_post**
> AccountInfoPost200Response account_info_post(account_info_post_request)

Get the account info provided by the provider

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.account_info_post200_response import AccountInfoPost200Response
from better_auth.models.account_info_post_request import AccountInfoPostRequest
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
async with better_auth.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = better_auth.DefaultApi(api_client)
    account_info_post_request = better_auth.AccountInfoPostRequest() # AccountInfoPostRequest | 

    try:
        api_response = await api_instance.account_info_post(account_info_post_request)
        print("The response of DefaultApi->account_info_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->account_info_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_info_post_request** | [**AccountInfoPostRequest**](AccountInfoPostRequest.md)|  | 

### Return type

[**AccountInfoPost200Response**](AccountInfoPost200Response.md)

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

# **change_email_post**
> ChangeEmailPost200Response change_email_post(change_email_post_request)

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.change_email_post200_response import ChangeEmailPost200Response
from better_auth.models.change_email_post_request import ChangeEmailPostRequest
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
async with better_auth.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = better_auth.DefaultApi(api_client)
    change_email_post_request = better_auth.ChangeEmailPostRequest() # ChangeEmailPostRequest | 

    try:
        api_response = await api_instance.change_email_post(change_email_post_request)
        print("The response of DefaultApi->change_email_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->change_email_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **change_email_post_request** | [**ChangeEmailPostRequest**](ChangeEmailPostRequest.md)|  | 

### Return type

[**ChangeEmailPost200Response**](ChangeEmailPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Email change request processed successfully |  -  |
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**422** | Unprocessable Entity. Email already exists |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **change_password_post**
> ChangePasswordPost200Response change_password_post(change_password_post_request)

Change the password of the user

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.change_password_post200_response import ChangePasswordPost200Response
from better_auth.models.change_password_post_request import ChangePasswordPostRequest
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
async with better_auth.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = better_auth.DefaultApi(api_client)
    change_password_post_request = better_auth.ChangePasswordPostRequest() # ChangePasswordPostRequest | 

    try:
        api_response = await api_instance.change_password_post(change_password_post_request)
        print("The response of DefaultApi->change_password_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->change_password_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **change_password_post_request** | [**ChangePasswordPostRequest**](ChangePasswordPostRequest.md)|  | 

### Return type

[**ChangePasswordPost200Response**](ChangePasswordPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Password successfully changed |  -  |
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_user_callback_get**
> DeleteUserCallbackGet200Response delete_user_callback_get(token=token, callback_url=callback_url)

Callback to complete user deletion with verification token

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.delete_user_callback_get200_response import DeleteUserCallbackGet200Response
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
async with better_auth.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = better_auth.DefaultApi(api_client)
    token = 'token_example' # str |  (optional)
    callback_url = 'callback_url_example' # str |  (optional)

    try:
        api_response = await api_instance.delete_user_callback_get(token=token, callback_url=callback_url)
        print("The response of DefaultApi->delete_user_callback_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->delete_user_callback_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**|  | [optional] 
 **callback_url** | **str**|  | [optional] 

### Return type

[**DeleteUserCallbackGet200Response**](DeleteUserCallbackGet200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User successfully deleted |  -  |
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_user_post**
> DeleteUserPost200Response delete_user_post(delete_user_post_request)

Delete the user

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.delete_user_post200_response import DeleteUserPost200Response
from better_auth.models.delete_user_post_request import DeleteUserPostRequest
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
async with better_auth.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = better_auth.DefaultApi(api_client)
    delete_user_post_request = better_auth.DeleteUserPostRequest() # DeleteUserPostRequest | 

    try:
        api_response = await api_instance.delete_user_post(delete_user_post_request)
        print("The response of DefaultApi->delete_user_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->delete_user_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **delete_user_post_request** | [**DeleteUserPostRequest**](DeleteUserPostRequest.md)|  | 

### Return type

[**DeleteUserPost200Response**](DeleteUserPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User deletion processed successfully |  -  |
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **error_get**
> str error_get()

Displays an error page

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
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
async with better_auth.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = better_auth.DefaultApi(api_client)

    try:
        api_response = await api_instance.error_get()
        print("The response of DefaultApi->error_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->error_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**str**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html, application/json

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

# **forget_password_post**
> ForgetPasswordPost200Response forget_password_post(forget_password_post_request)

Send a password reset email to the user

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.forget_password_post200_response import ForgetPasswordPost200Response
from better_auth.models.forget_password_post_request import ForgetPasswordPostRequest
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
async with better_auth.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = better_auth.DefaultApi(api_client)
    forget_password_post_request = better_auth.ForgetPasswordPostRequest() # ForgetPasswordPostRequest | 

    try:
        api_response = await api_instance.forget_password_post(forget_password_post_request)
        print("The response of DefaultApi->forget_password_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->forget_password_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **forget_password_post_request** | [**ForgetPasswordPostRequest**](ForgetPasswordPostRequest.md)|  | 

### Return type

[**ForgetPasswordPost200Response**](ForgetPasswordPost200Response.md)

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

# **get_access_token_post**
> RefreshTokenPost200Response get_access_token_post(refresh_token_post_request)

Get a valid access token, doing a refresh if needed

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.refresh_token_post200_response import RefreshTokenPost200Response
from better_auth.models.refresh_token_post_request import RefreshTokenPostRequest
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
async with better_auth.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = better_auth.DefaultApi(api_client)
    refresh_token_post_request = better_auth.RefreshTokenPostRequest() # RefreshTokenPostRequest | 

    try:
        api_response = await api_instance.get_access_token_post(refresh_token_post_request)
        print("The response of DefaultApi->get_access_token_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_access_token_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **refresh_token_post_request** | [**RefreshTokenPostRequest**](RefreshTokenPostRequest.md)|  | 

### Return type

[**RefreshTokenPost200Response**](RefreshTokenPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A Valid access token |  -  |
**400** | Invalid refresh token or provider configuration |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_session_get**
> GetSessionGet200Response get_session_get()

Get the current session

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.get_session_get200_response import GetSessionGet200Response
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
async with better_auth.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = better_auth.DefaultApi(api_client)

    try:
        api_response = await api_instance.get_session_get()
        print("The response of DefaultApi->get_session_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_session_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**GetSessionGet200Response**](GetSessionGet200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
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

# **link_social_post**
> LinkSocialPost200Response link_social_post(link_social_post_request)

Link a social account to the user

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.link_social_post200_response import LinkSocialPost200Response
from better_auth.models.link_social_post_request import LinkSocialPostRequest
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
async with better_auth.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = better_auth.DefaultApi(api_client)
    link_social_post_request = better_auth.LinkSocialPostRequest() # LinkSocialPostRequest | 

    try:
        api_response = await api_instance.link_social_post(link_social_post_request)
        print("The response of DefaultApi->link_social_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->link_social_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **link_social_post_request** | [**LinkSocialPostRequest**](LinkSocialPostRequest.md)|  | 

### Return type

[**LinkSocialPost200Response**](LinkSocialPost200Response.md)

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

# **list_accounts_get**
> List[ListAccountsGet200ResponseInner] list_accounts_get()

List all accounts linked to the user

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.list_accounts_get200_response_inner import ListAccountsGet200ResponseInner
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
async with better_auth.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = better_auth.DefaultApi(api_client)

    try:
        api_response = await api_instance.list_accounts_get()
        print("The response of DefaultApi->list_accounts_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->list_accounts_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[ListAccountsGet200ResponseInner]**](ListAccountsGet200ResponseInner.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
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

# **list_sessions_get**
> List[Session] list_sessions_get()

List all active sessions for the user

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.session import Session
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
async with better_auth.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = better_auth.DefaultApi(api_client)

    try:
        api_response = await api_instance.list_sessions_get()
        print("The response of DefaultApi->list_sessions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->list_sessions_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[Session]**](Session.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
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

# **ok_get**
> OkGet200Response ok_get()

Check if the API is working

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.ok_get200_response import OkGet200Response
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
async with better_auth.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = better_auth.DefaultApi(api_client)

    try:
        api_response = await api_instance.ok_get()
        print("The response of DefaultApi->ok_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->ok_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**OkGet200Response**](OkGet200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | API is working |  -  |
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **refresh_token_post**
> RefreshTokenPost200Response refresh_token_post(refresh_token_post_request)

Refresh the access token using a refresh token

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.refresh_token_post200_response import RefreshTokenPost200Response
from better_auth.models.refresh_token_post_request import RefreshTokenPostRequest
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
async with better_auth.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = better_auth.DefaultApi(api_client)
    refresh_token_post_request = better_auth.RefreshTokenPostRequest() # RefreshTokenPostRequest | 

    try:
        api_response = await api_instance.refresh_token_post(refresh_token_post_request)
        print("The response of DefaultApi->refresh_token_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->refresh_token_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **refresh_token_post_request** | [**RefreshTokenPostRequest**](RefreshTokenPostRequest.md)|  | 

### Return type

[**RefreshTokenPost200Response**](RefreshTokenPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Access token refreshed successfully |  -  |
**400** | Invalid refresh token or provider configuration |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **request_password_reset_post**
> ForgetPasswordPost200Response request_password_reset_post(forget_password_post_request)

Send a password reset email to the user

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.forget_password_post200_response import ForgetPasswordPost200Response
from better_auth.models.forget_password_post_request import ForgetPasswordPostRequest
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
async with better_auth.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = better_auth.DefaultApi(api_client)
    forget_password_post_request = better_auth.ForgetPasswordPostRequest() # ForgetPasswordPostRequest | 

    try:
        api_response = await api_instance.request_password_reset_post(forget_password_post_request)
        print("The response of DefaultApi->request_password_reset_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->request_password_reset_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **forget_password_post_request** | [**ForgetPasswordPostRequest**](ForgetPasswordPostRequest.md)|  | 

### Return type

[**ForgetPasswordPost200Response**](ForgetPasswordPost200Response.md)

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

# **reset_password_post**
> ResetPasswordPost200Response reset_password_post(reset_password_post_request)

Reset the password for a user

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.reset_password_post200_response import ResetPasswordPost200Response
from better_auth.models.reset_password_post_request import ResetPasswordPostRequest
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
async with better_auth.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = better_auth.DefaultApi(api_client)
    reset_password_post_request = better_auth.ResetPasswordPostRequest() # ResetPasswordPostRequest | 

    try:
        api_response = await api_instance.reset_password_post(reset_password_post_request)
        print("The response of DefaultApi->reset_password_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->reset_password_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reset_password_post_request** | [**ResetPasswordPostRequest**](ResetPasswordPostRequest.md)|  | 

### Return type

[**ResetPasswordPost200Response**](ResetPasswordPost200Response.md)

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

# **reset_password_token_get**
> ResetPasswordTokenGet200Response reset_password_token_get(callback_url=callback_url)

Redirects the user to the callback URL with the token

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.reset_password_token_get200_response import ResetPasswordTokenGet200Response
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
async with better_auth.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = better_auth.DefaultApi(api_client)
    callback_url = 'callback_url_example' # str |  (optional)

    try:
        api_response = await api_instance.reset_password_token_get(callback_url=callback_url)
        print("The response of DefaultApi->reset_password_token_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->reset_password_token_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **callback_url** | **str**|  | [optional] 

### Return type

[**ResetPasswordTokenGet200Response**](ResetPasswordTokenGet200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
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

# **revoke_other_sessions_post**
> RevokeOtherSessionsPost200Response revoke_other_sessions_post(body=body)

Revoke all other sessions for the user except the current one

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.revoke_other_sessions_post200_response import RevokeOtherSessionsPost200Response
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
async with better_auth.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = better_auth.DefaultApi(api_client)
    body = None # object |  (optional)

    try:
        api_response = await api_instance.revoke_other_sessions_post(body=body)
        print("The response of DefaultApi->revoke_other_sessions_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->revoke_other_sessions_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **object**|  | [optional] 

### Return type

[**RevokeOtherSessionsPost200Response**](RevokeOtherSessionsPost200Response.md)

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

# **revoke_session_post**
> RevokeSessionPost200Response revoke_session_post(revoke_session_post_request=revoke_session_post_request)

Revoke a single session

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.revoke_session_post200_response import RevokeSessionPost200Response
from better_auth.models.revoke_session_post_request import RevokeSessionPostRequest
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
async with better_auth.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = better_auth.DefaultApi(api_client)
    revoke_session_post_request = better_auth.RevokeSessionPostRequest() # RevokeSessionPostRequest |  (optional)

    try:
        api_response = await api_instance.revoke_session_post(revoke_session_post_request=revoke_session_post_request)
        print("The response of DefaultApi->revoke_session_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->revoke_session_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **revoke_session_post_request** | [**RevokeSessionPostRequest**](RevokeSessionPostRequest.md)|  | [optional] 

### Return type

[**RevokeSessionPost200Response**](RevokeSessionPost200Response.md)

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

# **revoke_sessions_post**
> RevokeSessionsPost200Response revoke_sessions_post(body=body)

Revoke all sessions for the user

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.revoke_sessions_post200_response import RevokeSessionsPost200Response
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
async with better_auth.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = better_auth.DefaultApi(api_client)
    body = None # object |  (optional)

    try:
        api_response = await api_instance.revoke_sessions_post(body=body)
        print("The response of DefaultApi->revoke_sessions_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->revoke_sessions_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **object**|  | [optional] 

### Return type

[**RevokeSessionsPost200Response**](RevokeSessionsPost200Response.md)

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

# **send_verification_email_post**
> SendVerificationEmailPost200Response send_verification_email_post(send_verification_email_post_request=send_verification_email_post_request)

Send a verification email to the user

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.send_verification_email_post200_response import SendVerificationEmailPost200Response
from better_auth.models.send_verification_email_post_request import SendVerificationEmailPostRequest
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
async with better_auth.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = better_auth.DefaultApi(api_client)
    send_verification_email_post_request = better_auth.SendVerificationEmailPostRequest() # SendVerificationEmailPostRequest |  (optional)

    try:
        api_response = await api_instance.send_verification_email_post(send_verification_email_post_request=send_verification_email_post_request)
        print("The response of DefaultApi->send_verification_email_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->send_verification_email_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **send_verification_email_post_request** | [**SendVerificationEmailPostRequest**](SendVerificationEmailPostRequest.md)|  | [optional] 

### Return type

[**SendVerificationEmailPost200Response**](SendVerificationEmailPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sign_in_email_post**
> SignInEmailPost200Response sign_in_email_post(sign_in_email_post_request)

Sign in with email and password

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.sign_in_email_post200_response import SignInEmailPost200Response
from better_auth.models.sign_in_email_post_request import SignInEmailPostRequest
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
async with better_auth.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = better_auth.DefaultApi(api_client)
    sign_in_email_post_request = better_auth.SignInEmailPostRequest() # SignInEmailPostRequest | 

    try:
        api_response = await api_instance.sign_in_email_post(sign_in_email_post_request)
        print("The response of DefaultApi->sign_in_email_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->sign_in_email_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sign_in_email_post_request** | [**SignInEmailPostRequest**](SignInEmailPostRequest.md)|  | 

### Return type

[**SignInEmailPost200Response**](SignInEmailPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success - Returns either session details or redirect URL |  -  |
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sign_out_post**
> SignOutPost200Response sign_out_post(body=body)

Sign out the current user

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
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
async with better_auth.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = better_auth.DefaultApi(api_client)
    body = None # object |  (optional)

    try:
        api_response = await api_instance.sign_out_post(body=body)
        print("The response of DefaultApi->sign_out_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->sign_out_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **object**|  | [optional] 

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

# **sign_up_email_post**
> SignUpEmailPost200Response sign_up_email_post(sign_up_email_post_request=sign_up_email_post_request)

Sign up a user using email and password

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.sign_up_email_post200_response import SignUpEmailPost200Response
from better_auth.models.sign_up_email_post_request import SignUpEmailPostRequest
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
async with better_auth.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = better_auth.DefaultApi(api_client)
    sign_up_email_post_request = better_auth.SignUpEmailPostRequest() # SignUpEmailPostRequest |  (optional)

    try:
        api_response = await api_instance.sign_up_email_post(sign_up_email_post_request=sign_up_email_post_request)
        print("The response of DefaultApi->sign_up_email_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->sign_up_email_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sign_up_email_post_request** | [**SignUpEmailPostRequest**](SignUpEmailPostRequest.md)|  | [optional] 

### Return type

[**SignUpEmailPost200Response**](SignUpEmailPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully created user |  -  |
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**422** | Unprocessable Entity. User already exists or failed to create user. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **social_sign_in**
> SocialSignIn200Response social_sign_in(social_sign_in_request)

Sign in with a social provider

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.social_sign_in200_response import SocialSignIn200Response
from better_auth.models.social_sign_in_request import SocialSignInRequest
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
async with better_auth.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = better_auth.DefaultApi(api_client)
    social_sign_in_request = better_auth.SocialSignInRequest() # SocialSignInRequest | 

    try:
        api_response = await api_instance.social_sign_in(social_sign_in_request)
        print("The response of DefaultApi->social_sign_in:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->social_sign_in: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **social_sign_in_request** | [**SocialSignInRequest**](SocialSignInRequest.md)|  | 

### Return type

[**SocialSignIn200Response**](SocialSignIn200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success - Returns either session details or redirect URL |  -  |
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unlink_account_post**
> ResetPasswordPost200Response unlink_account_post(unlink_account_post_request)

Unlink an account

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.reset_password_post200_response import ResetPasswordPost200Response
from better_auth.models.unlink_account_post_request import UnlinkAccountPostRequest
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
async with better_auth.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = better_auth.DefaultApi(api_client)
    unlink_account_post_request = better_auth.UnlinkAccountPostRequest() # UnlinkAccountPostRequest | 

    try:
        api_response = await api_instance.unlink_account_post(unlink_account_post_request)
        print("The response of DefaultApi->unlink_account_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->unlink_account_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unlink_account_post_request** | [**UnlinkAccountPostRequest**](UnlinkAccountPostRequest.md)|  | 

### Return type

[**ResetPasswordPost200Response**](ResetPasswordPost200Response.md)

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

# **update_user_post**
> UpdateUserPost200Response update_user_post(update_user_post_request=update_user_post_request)

Update the current user

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.update_user_post200_response import UpdateUserPost200Response
from better_auth.models.update_user_post_request import UpdateUserPostRequest
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
async with better_auth.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = better_auth.DefaultApi(api_client)
    update_user_post_request = better_auth.UpdateUserPostRequest() # UpdateUserPostRequest |  (optional)

    try:
        api_response = await api_instance.update_user_post(update_user_post_request=update_user_post_request)
        print("The response of DefaultApi->update_user_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->update_user_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **update_user_post_request** | [**UpdateUserPostRequest**](UpdateUserPostRequest.md)|  | [optional] 

### Return type

[**UpdateUserPost200Response**](UpdateUserPost200Response.md)

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

# **verify_email_get**
> VerifyEmailGet200Response verify_email_get(token, callback_url=callback_url)

Verify the email of the user

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.verify_email_get200_response import VerifyEmailGet200Response
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
async with better_auth.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = better_auth.DefaultApi(api_client)
    token = 'token_example' # str | The token to verify the email
    callback_url = 'callback_url_example' # str | The URL to redirect to after email verification (optional)

    try:
        api_response = await api_instance.verify_email_get(token, callback_url=callback_url)
        print("The response of DefaultApi->verify_email_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->verify_email_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| The token to verify the email | 
 **callback_url** | **str**| The URL to redirect to after email verification | [optional] 

### Return type

[**VerifyEmailGet200Response**](VerifyEmailGet200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
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


# better_auth.MagicLinkApi

All URIs are relative to *http://localhost:3000/api/auth*

Method | HTTP request | Description
------------- | ------------- | -------------
[**magic_link_verify_get**](MagicLinkApi.md#magic_link_verify_get) | **GET** /magic-link/verify | 
[**sign_in_magic_link_post**](MagicLinkApi.md#sign_in_magic_link_post) | **POST** /sign-in/magic-link | 


# **magic_link_verify_get**
> SignInAnonymousPost200Response magic_link_verify_get(token=token, callback_url=callback_url, error_callback_url=error_callback_url, new_user_callback_url=new_user_callback_url)

Verify magic link

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.sign_in_anonymous_post200_response import SignInAnonymousPost200Response
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
    api_instance = better_auth.MagicLinkApi(api_client)
    token = 'token_example' # str |  (optional)
    callback_url = 'callback_url_example' # str |  (optional)
    error_callback_url = 'error_callback_url_example' # str |  (optional)
    new_user_callback_url = 'new_user_callback_url_example' # str |  (optional)

    try:
        api_response = api_instance.magic_link_verify_get(token=token, callback_url=callback_url, error_callback_url=error_callback_url, new_user_callback_url=new_user_callback_url)
        print("The response of MagicLinkApi->magic_link_verify_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MagicLinkApi->magic_link_verify_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**|  | [optional] 
 **callback_url** | **str**|  | [optional] 
 **error_callback_url** | **str**|  | [optional] 
 **new_user_callback_url** | **str**|  | [optional] 

### Return type

[**SignInAnonymousPost200Response**](SignInAnonymousPost200Response.md)

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

# **sign_in_magic_link_post**
> ResetPasswordPost200Response sign_in_magic_link_post(sign_in_magic_link_post_request)

Sign in with magic link

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.reset_password_post200_response import ResetPasswordPost200Response
from better_auth.models.sign_in_magic_link_post_request import SignInMagicLinkPostRequest
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
    api_instance = better_auth.MagicLinkApi(api_client)
    sign_in_magic_link_post_request = better_auth.SignInMagicLinkPostRequest() # SignInMagicLinkPostRequest | 

    try:
        api_response = api_instance.sign_in_magic_link_post(sign_in_magic_link_post_request)
        print("The response of MagicLinkApi->sign_in_magic_link_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MagicLinkApi->sign_in_magic_link_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sign_in_magic_link_post_request** | [**SignInMagicLinkPostRequest**](SignInMagicLinkPostRequest.md)|  | 

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


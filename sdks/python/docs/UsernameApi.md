# better_auth.UsernameApi

All URIs are relative to *http://localhost:3000/api/auth*

Method | HTTP request | Description
------------- | ------------- | -------------
[**is_username_available_post**](UsernameApi.md#is_username_available_post) | **POST** /is-username-available | 
[**sign_in_username_post**](UsernameApi.md#sign_in_username_post) | **POST** /sign-in/username | 


# **is_username_available_post**
> is_username_available_post(is_username_available_post_request)

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.is_username_available_post_request import IsUsernameAvailablePostRequest
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
    api_instance = better_auth.UsernameApi(api_client)
    is_username_available_post_request = better_auth.IsUsernameAvailablePostRequest() # IsUsernameAvailablePostRequest | 

    try:
        api_instance.is_username_available_post(is_username_available_post_request)
    except Exception as e:
        print("Exception when calling UsernameApi->is_username_available_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **is_username_available_post_request** | [**IsUsernameAvailablePostRequest**](IsUsernameAvailablePostRequest.md)|  | 

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
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sign_in_username_post**
> SignInUsernamePost200Response sign_in_username_post(sign_in_username_post_request)

Sign in with username

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.sign_in_username_post200_response import SignInUsernamePost200Response
from better_auth.models.sign_in_username_post_request import SignInUsernamePostRequest
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
    api_instance = better_auth.UsernameApi(api_client)
    sign_in_username_post_request = better_auth.SignInUsernamePostRequest() # SignInUsernamePostRequest | 

    try:
        api_response = api_instance.sign_in_username_post(sign_in_username_post_request)
        print("The response of UsernameApi->sign_in_username_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsernameApi->sign_in_username_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sign_in_username_post_request** | [**SignInUsernamePostRequest**](SignInUsernamePostRequest.md)|  | 

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
**422** | Unprocessable Entity. Validation error |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


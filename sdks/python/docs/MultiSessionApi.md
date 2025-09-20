# better_auth.MultiSessionApi

All URIs are relative to *http://localhost:3000/api/auth*

Method | HTTP request | Description
------------- | ------------- | -------------
[**multi_session_list_device_sessions_get**](MultiSessionApi.md#multi_session_list_device_sessions_get) | **GET** /multi-session/list-device-sessions | 
[**multi_session_revoke_post**](MultiSessionApi.md#multi_session_revoke_post) | **POST** /multi-session/revoke | 
[**multi_session_set_active_post**](MultiSessionApi.md#multi_session_set_active_post) | **POST** /multi-session/set-active | 


# **multi_session_list_device_sessions_get**
> multi_session_list_device_sessions_get()

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
    api_instance = better_auth.MultiSessionApi(api_client)

    try:
        await api_instance.multi_session_list_device_sessions_get()
    except Exception as e:
        print("Exception when calling MultiSessionApi->multi_session_list_device_sessions_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
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

# **multi_session_revoke_post**
> ResetPasswordPost200Response multi_session_revoke_post(multi_session_revoke_post_request)

Revoke a device session

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.multi_session_revoke_post_request import MultiSessionRevokePostRequest
from better_auth.models.reset_password_post200_response import ResetPasswordPost200Response
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
    api_instance = better_auth.MultiSessionApi(api_client)
    multi_session_revoke_post_request = better_auth.MultiSessionRevokePostRequest() # MultiSessionRevokePostRequest | 

    try:
        api_response = await api_instance.multi_session_revoke_post(multi_session_revoke_post_request)
        print("The response of MultiSessionApi->multi_session_revoke_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MultiSessionApi->multi_session_revoke_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **multi_session_revoke_post_request** | [**MultiSessionRevokePostRequest**](MultiSessionRevokePostRequest.md)|  | 

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

# **multi_session_set_active_post**
> MultiSessionSetActivePost200Response multi_session_set_active_post(multi_session_set_active_post_request)

Set the active session

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.multi_session_set_active_post200_response import MultiSessionSetActivePost200Response
from better_auth.models.multi_session_set_active_post_request import MultiSessionSetActivePostRequest
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
    api_instance = better_auth.MultiSessionApi(api_client)
    multi_session_set_active_post_request = better_auth.MultiSessionSetActivePostRequest() # MultiSessionSetActivePostRequest | 

    try:
        api_response = await api_instance.multi_session_set_active_post(multi_session_set_active_post_request)
        print("The response of MultiSessionApi->multi_session_set_active_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MultiSessionApi->multi_session_set_active_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **multi_session_set_active_post_request** | [**MultiSessionSetActivePostRequest**](MultiSessionSetActivePostRequest.md)|  | 

### Return type

[**MultiSessionSetActivePost200Response**](MultiSessionSetActivePost200Response.md)

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


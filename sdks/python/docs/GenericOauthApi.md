# better_auth.GenericOauthApi

All URIs are relative to *http://localhost:3000/api/auth*

Method | HTTP request | Description
------------- | ------------- | -------------
[**oauth2_callback_provider_id_get**](GenericOauthApi.md#oauth2_callback_provider_id_get) | **GET** /oauth2/callback/{providerId} | 
[**oauth2_link_post**](GenericOauthApi.md#oauth2_link_post) | **POST** /oauth2/link | 
[**sign_in_oauth2_post**](GenericOauthApi.md#sign_in_oauth2_post) | **POST** /sign-in/oauth2 | 


# **oauth2_callback_provider_id_get**
> Oauth2CallbackProviderIdGet200Response oauth2_callback_provider_id_get(code=code, error=error, error_description=error_description, state=state)

OAuth2 callback

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.oauth2_callback_provider_id_get200_response import Oauth2CallbackProviderIdGet200Response
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
    api_instance = better_auth.GenericOauthApi(api_client)
    code = 'code_example' # str |  (optional)
    error = 'error_example' # str |  (optional)
    error_description = 'error_description_example' # str |  (optional)
    state = 'state_example' # str |  (optional)

    try:
        api_response = await api_instance.oauth2_callback_provider_id_get(code=code, error=error, error_description=error_description, state=state)
        print("The response of GenericOauthApi->oauth2_callback_provider_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GenericOauthApi->oauth2_callback_provider_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**|  | [optional] 
 **error** | **str**|  | [optional] 
 **error_description** | **str**|  | [optional] 
 **state** | **str**|  | [optional] 

### Return type

[**Oauth2CallbackProviderIdGet200Response**](Oauth2CallbackProviderIdGet200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OAuth2 callback |  -  |
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **oauth2_link_post**
> Oauth2LinkPost200Response oauth2_link_post(oauth2_link_post_request)

Link an OAuth2 account to the current user session

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.oauth2_link_post200_response import Oauth2LinkPost200Response
from better_auth.models.oauth2_link_post_request import Oauth2LinkPostRequest
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
    api_instance = better_auth.GenericOauthApi(api_client)
    oauth2_link_post_request = better_auth.Oauth2LinkPostRequest() # Oauth2LinkPostRequest | 

    try:
        api_response = await api_instance.oauth2_link_post(oauth2_link_post_request)
        print("The response of GenericOauthApi->oauth2_link_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GenericOauthApi->oauth2_link_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oauth2_link_post_request** | [**Oauth2LinkPostRequest**](Oauth2LinkPostRequest.md)|  | 

### Return type

[**Oauth2LinkPost200Response**](Oauth2LinkPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Authorization URL generated successfully for linking an OAuth2 account |  -  |
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sign_in_oauth2_post**
> SignInOauth2Post200Response sign_in_oauth2_post(sign_in_oauth2_post_request)

Sign in with OAuth2

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.sign_in_oauth2_post200_response import SignInOauth2Post200Response
from better_auth.models.sign_in_oauth2_post_request import SignInOauth2PostRequest
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
    api_instance = better_auth.GenericOauthApi(api_client)
    sign_in_oauth2_post_request = better_auth.SignInOauth2PostRequest() # SignInOauth2PostRequest | 

    try:
        api_response = await api_instance.sign_in_oauth2_post(sign_in_oauth2_post_request)
        print("The response of GenericOauthApi->sign_in_oauth2_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GenericOauthApi->sign_in_oauth2_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sign_in_oauth2_post_request** | [**SignInOauth2PostRequest**](SignInOauth2PostRequest.md)|  | 

### Return type

[**SignInOauth2Post200Response**](SignInOauth2Post200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Sign in with OAuth2 |  -  |
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


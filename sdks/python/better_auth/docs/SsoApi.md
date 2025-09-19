# better_auth.SsoApi

All URIs are relative to *http://localhost:3000/api/auth*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sign_in_sso_post**](SsoApi.md#sign_in_sso_post) | **POST** /sign-in/sso | 
[**sso_callback_provider_id_get**](SsoApi.md#sso_callback_provider_id_get) | **GET** /sso/callback/{providerId} | 
[**sso_register_post**](SsoApi.md#sso_register_post) | **POST** /sso/register | 
[**sso_saml2_callback_provider_id_post**](SsoApi.md#sso_saml2_callback_provider_id_post) | **POST** /sso/saml2/callback/{providerId} | 
[**sso_saml2_sp_metadata_get**](SsoApi.md#sso_saml2_sp_metadata_get) | **GET** /sso/saml2/sp/metadata | 


# **sign_in_sso_post**
> SignInSsoPost200Response sign_in_sso_post(sign_in_sso_post_request=sign_in_sso_post_request)

This endpoint is used to sign in with an SSO provider. It redirects to the provider's authorization URL

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.sign_in_sso_post200_response import SignInSsoPost200Response
from better_auth.models.sign_in_sso_post_request import SignInSsoPostRequest
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
    api_instance = better_auth.SsoApi(api_client)
    sign_in_sso_post_request = better_auth.SignInSsoPostRequest() # SignInSsoPostRequest |  (optional)

    try:
        api_response = api_instance.sign_in_sso_post(sign_in_sso_post_request=sign_in_sso_post_request)
        print("The response of SsoApi->sign_in_sso_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SsoApi->sign_in_sso_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sign_in_sso_post_request** | [**SignInSsoPostRequest**](SignInSsoPostRequest.md)|  | [optional] 

### Return type

[**SignInSsoPost200Response**](SignInSsoPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Authorization URL generated successfully for SSO sign-in |  -  |
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sso_callback_provider_id_get**
> sso_callback_provider_id_get(code=code, state=state, error=error, error_description=error_description)

This endpoint is used as the callback URL for SSO providers. It handles the authorization code and exchanges it for an access token

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
with better_auth.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = better_auth.SsoApi(api_client)
    code = 'code_example' # str |  (optional)
    state = 'state_example' # str |  (optional)
    error = 'error_example' # str |  (optional)
    error_description = 'error_description_example' # str |  (optional)

    try:
        api_instance.sso_callback_provider_id_get(code=code, state=state, error=error, error_description=error_description)
    except Exception as e:
        print("Exception when calling SsoApi->sso_callback_provider_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**|  | [optional] 
 **state** | **str**|  | [optional] 
 **error** | **str**|  | [optional] 
 **error_description** | **str**|  | [optional] 

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
**302** | Redirects to the callback URL |  -  |
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sso_register_post**
> SsoRegisterPost200Response sso_register_post(sso_register_post_request)

This endpoint is used to register an OIDC provider. This is used to configure the provider and link it to an organization

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.sso_register_post200_response import SsoRegisterPost200Response
from better_auth.models.sso_register_post_request import SsoRegisterPostRequest
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
    api_instance = better_auth.SsoApi(api_client)
    sso_register_post_request = better_auth.SsoRegisterPostRequest() # SsoRegisterPostRequest | 

    try:
        api_response = api_instance.sso_register_post(sso_register_post_request)
        print("The response of SsoApi->sso_register_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SsoApi->sso_register_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sso_register_post_request** | [**SsoRegisterPostRequest**](SsoRegisterPostRequest.md)|  | 

### Return type

[**SsoRegisterPost200Response**](SsoRegisterPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OIDC provider created successfully |  -  |
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sso_saml2_callback_provider_id_post**
> sso_saml2_callback_provider_id_post(sso_saml2_callback_provider_id_post_request)

This endpoint is used as the callback URL for SAML providers.

### Example

* Bearer Authentication (bearerAuth):

```python
import better_auth
from better_auth.models.sso_saml2_callback_provider_id_post_request import SsoSaml2CallbackProviderIdPostRequest
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
    api_instance = better_auth.SsoApi(api_client)
    sso_saml2_callback_provider_id_post_request = better_auth.SsoSaml2CallbackProviderIdPostRequest() # SsoSaml2CallbackProviderIdPostRequest | 

    try:
        api_instance.sso_saml2_callback_provider_id_post(sso_saml2_callback_provider_id_post_request)
    except Exception as e:
        print("Exception when calling SsoApi->sso_saml2_callback_provider_id_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sso_saml2_callback_provider_id_post_request** | [**SsoSaml2CallbackProviderIdPostRequest**](SsoSaml2CallbackProviderIdPostRequest.md)|  | 

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
**302** | Redirects to the callback URL |  -  |
**400** | Invalid SAML response |  -  |
**401** | Unauthorized - SAML authentication failed |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sso_saml2_sp_metadata_get**
> sso_saml2_sp_metadata_get(provider_id=provider_id, format=format)

Returns the SAML metadata for the Service Provider

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
with better_auth.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = better_auth.SsoApi(api_client)
    provider_id = 'provider_id_example' # str |  (optional)
    format = 'format_example' # str |  (optional)

    try:
        api_instance.sso_saml2_sp_metadata_get(provider_id=provider_id, format=format)
    except Exception as e:
        print("Exception when calling SsoApi->sso_saml2_sp_metadata_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **provider_id** | **str**|  | [optional] 
 **format** | **str**|  | [optional] 

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
**200** | SAML metadata in XML format |  -  |
**400** | Bad Request. Usually due to missing parameters, or invalid parameters. |  -  |
**401** | Unauthorized. Due to missing or invalid authentication. |  -  |
**403** | Forbidden. You do not have permission to access this resource or to perform this action. |  -  |
**404** | Not Found. The requested resource was not found. |  -  |
**429** | Too Many Requests. You have exceeded the rate limit. Try again later. |  -  |
**500** | Internal Server Error. This is a problem with the server that you cannot fix. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


# Oauth2RegisterPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**redirect_uris** | **List[object]** | A list of redirect URIs. Eg: [\&quot;https://client.example.com/callback\&quot;] | 
**token_endpoint_auth_method** | **str** |  | [optional] 
**grant_types** | **str** |  | [optional] 
**response_types** | **str** |  | [optional] 
**client_name** | **str** | The name of the application. Eg: \&quot;My App\&quot; | [optional] 
**client_uri** | **str** | The URI of the application. Eg: \&quot;https://client.example.com\&quot; | [optional] 
**logo_uri** | **str** | The URI of the application logo. Eg: \&quot;https://client.example.com/logo.png\&quot; | [optional] 
**scope** | **str** | The scopes supported by the application. Separated by spaces. Eg: \&quot;profile email\&quot; | [optional] 
**contacts** | **List[object]** | The contact information for the application. Eg: [\&quot;admin@example.com\&quot;] | [optional] 
**tos_uri** | **str** | The URI of the application terms of service. Eg: \&quot;https://client.example.com/tos\&quot; | [optional] 
**policy_uri** | **str** | The URI of the application privacy policy. Eg: \&quot;https://client.example.com/policy\&quot; | [optional] 
**jwks_uri** | **str** | The URI of the application JWKS. Eg: \&quot;https://client.example.com/jwks\&quot; | [optional] 
**jwks** | **str** | The JWKS of the application. Eg: {\&quot;keys\&quot;: [{\&quot;kty\&quot;: \&quot;RSA\&quot;, \&quot;alg\&quot;: \&quot;RS256\&quot;, \&quot;use\&quot;: \&quot;sig\&quot;, \&quot;n\&quot;: \&quot;...\&quot;, \&quot;e\&quot;: \&quot;...\&quot;}]} | [optional] 
**metadata** | **str** | The metadata of the application. Eg: {\&quot;key\&quot;: \&quot;value\&quot;} | [optional] 
**software_id** | **str** | The software ID of the application. Eg: \&quot;my-software\&quot; | [optional] 
**software_version** | **str** | The software version of the application. Eg: \&quot;1.0.0\&quot; | [optional] 
**software_statement** | **str** | The software statement of the application. | [optional] 

## Example

```python
from better_auth.models.oauth2_register_post_request import Oauth2RegisterPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of Oauth2RegisterPostRequest from a JSON string
oauth2_register_post_request_instance = Oauth2RegisterPostRequest.from_json(json)
# print the JSON string representation of the object
print(Oauth2RegisterPostRequest.to_json())

# convert the object into a dict
oauth2_register_post_request_dict = oauth2_register_post_request_instance.to_dict()
# create an instance of Oauth2RegisterPostRequest from a dict
oauth2_register_post_request_from_dict = Oauth2RegisterPostRequest.from_dict(oauth2_register_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



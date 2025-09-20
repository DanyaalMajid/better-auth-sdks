# SsoRegisterPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provider_id** | **str** | The ID of the provider. This is used to identify the provider during login and callback | 
**issuer** | **str** | The issuer of the provider | 
**domain** | **str** | The domain of the provider. This is used for email matching | 
**oidc_config** | [**SsoRegisterPostRequestOidcConfig**](SsoRegisterPostRequestOidcConfig.md) |  | [optional] 
**saml_config** | [**SsoRegisterPostRequestSamlConfig**](SsoRegisterPostRequestSamlConfig.md) |  | [optional] 
**mapping** | [**SsoRegisterPostRequestMapping**](SsoRegisterPostRequestMapping.md) |  | [optional] 
**organization_id** | **str** | If organization plugin is enabled, the organization id to link the provider to | [optional] 
**override_user_info** | **str** |  | [optional] 

## Example

```python
from better_auth.models.sso_register_post_request import SsoRegisterPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SsoRegisterPostRequest from a JSON string
sso_register_post_request_instance = SsoRegisterPostRequest.from_json(json)
# print the JSON string representation of the object
print(SsoRegisterPostRequest.to_json())

# convert the object into a dict
sso_register_post_request_dict = sso_register_post_request_instance.to_dict()
# create an instance of SsoRegisterPostRequest from a dict
sso_register_post_request_from_dict = SsoRegisterPostRequest.from_dict(sso_register_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



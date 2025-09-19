# SsoRegisterPost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issuer** | **str** | The issuer URL of the provider | 
**domain** | **str** | The domain of the provider, used for email matching | 
**oidc_config** | [**SsoRegisterPost200ResponseOidcConfig**](SsoRegisterPost200ResponseOidcConfig.md) |  | 
**organization_id** | **str** | ID of the linked organization, if any | [optional] 
**user_id** | **str** | ID of the user who registered the provider | 
**provider_id** | **str** | Unique identifier for the provider | 
**redirect_uri** | **str** | The redirect URI for the provider callback | 

## Example

```python
from better_auth.models.sso_register_post200_response import SsoRegisterPost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of SsoRegisterPost200Response from a JSON string
sso_register_post200_response_instance = SsoRegisterPost200Response.from_json(json)
# print the JSON string representation of the object
print(SsoRegisterPost200Response.to_json())

# convert the object into a dict
sso_register_post200_response_dict = sso_register_post200_response_instance.to_dict()
# create an instance of SsoRegisterPost200Response from a dict
sso_register_post200_response_from_dict = SsoRegisterPost200Response.from_dict(sso_register_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



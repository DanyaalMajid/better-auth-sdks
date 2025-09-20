# SsoRegisterPost200ResponseOidcConfig

OIDC configuration for the provider

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issuer** | **str** | The issuer URL of the provider | 
**pkce** | **bool** | Whether PKCE is enabled for the authorization flow | 
**client_id** | **str** | The client ID for the provider | 
**client_secret** | **str** | The client secret for the provider | 
**authorization_endpoint** | **str** | The authorization endpoint URL | [optional] 
**discovery_endpoint** | **str** | The discovery endpoint URL | 
**user_info_endpoint** | **str** | The user info endpoint URL | [optional] 
**scopes** | **List[str]** | The scopes requested from the provider | [optional] 
**token_endpoint** | **str** | The token endpoint URL | [optional] 
**token_endpoint_authentication** | **str** | Authentication method for the token endpoint | [optional] 
**jwks_endpoint** | **str** | The JWKS endpoint URL | [optional] 
**mapping** | [**SsoRegisterPost200ResponseOidcConfigMapping**](SsoRegisterPost200ResponseOidcConfigMapping.md) |  | [optional] 

## Example

```python
from better_auth.models.sso_register_post200_response_oidc_config import SsoRegisterPost200ResponseOidcConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SsoRegisterPost200ResponseOidcConfig from a JSON string
sso_register_post200_response_oidc_config_instance = SsoRegisterPost200ResponseOidcConfig.from_json(json)
# print the JSON string representation of the object
print(SsoRegisterPost200ResponseOidcConfig.to_json())

# convert the object into a dict
sso_register_post200_response_oidc_config_dict = sso_register_post200_response_oidc_config_instance.to_dict()
# create an instance of SsoRegisterPost200ResponseOidcConfig from a dict
sso_register_post200_response_oidc_config_from_dict = SsoRegisterPost200ResponseOidcConfig.from_dict(sso_register_post200_response_oidc_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



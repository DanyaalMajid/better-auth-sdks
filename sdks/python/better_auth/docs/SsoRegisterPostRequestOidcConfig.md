# SsoRegisterPostRequestOidcConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | The client ID | 
**client_secret** | **str** | The client secret | 
**authorization_endpoint** | **str** | The authorization endpoint | [optional] 
**token_endpoint** | **str** | The token endpoint | [optional] 
**user_info_endpoint** | **str** | The user info endpoint | [optional] 
**token_endpoint_authentication** | **str** |  | [optional] 
**jwks_endpoint** | **str** | The JWKS endpoint | [optional] 
**discovery_endpoint** | **str** |  | [optional] 
**scopes** | **List[object]** | The scopes to request. Defaults to [&#39;openid&#39;, &#39;email&#39;, &#39;profile&#39;, &#39;offline_access&#39;] | [optional] 
**pkce** | **str** |  | [optional] 

## Example

```python
from better_auth.models.sso_register_post_request_oidc_config import SsoRegisterPostRequestOidcConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SsoRegisterPostRequestOidcConfig from a JSON string
sso_register_post_request_oidc_config_instance = SsoRegisterPostRequestOidcConfig.from_json(json)
# print the JSON string representation of the object
print(SsoRegisterPostRequestOidcConfig.to_json())

# convert the object into a dict
sso_register_post_request_oidc_config_dict = sso_register_post_request_oidc_config_instance.to_dict()
# create an instance of SsoRegisterPostRequestOidcConfig from a dict
sso_register_post_request_oidc_config_from_dict = SsoRegisterPostRequestOidcConfig.from_dict(sso_register_post_request_oidc_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



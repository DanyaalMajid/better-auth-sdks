# SsoRegisterPost200ResponseOidcConfigMapping


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Field mapping for user ID (defaults to &#39;sub&#39;) | 
**email** | **str** | Field mapping for email (defaults to &#39;email&#39;) | 
**email_verified** | **str** | Field mapping for email verification (defaults to &#39;email_verified&#39;) | [optional] 
**name** | **str** | Field mapping for name (defaults to &#39;name&#39;) | 
**image** | **str** | Field mapping for image (defaults to &#39;picture&#39;) | [optional] 
**extra_fields** | **Dict[str, str]** | Additional field mappings | [optional] 

## Example

```python
from better_auth.models.sso_register_post200_response_oidc_config_mapping import SsoRegisterPost200ResponseOidcConfigMapping

# TODO update the JSON string below
json = "{}"
# create an instance of SsoRegisterPost200ResponseOidcConfigMapping from a JSON string
sso_register_post200_response_oidc_config_mapping_instance = SsoRegisterPost200ResponseOidcConfigMapping.from_json(json)
# print the JSON string representation of the object
print(SsoRegisterPost200ResponseOidcConfigMapping.to_json())

# convert the object into a dict
sso_register_post200_response_oidc_config_mapping_dict = sso_register_post200_response_oidc_config_mapping_instance.to_dict()
# create an instance of SsoRegisterPost200ResponseOidcConfigMapping from a dict
sso_register_post200_response_oidc_config_mapping_from_dict = SsoRegisterPost200ResponseOidcConfigMapping.from_dict(sso_register_post200_response_oidc_config_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



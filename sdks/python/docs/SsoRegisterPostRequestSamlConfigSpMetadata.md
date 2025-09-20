# SsoRegisterPostRequestSamlConfigSpMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | **str** |  | 
**binding** | **str** |  | [optional] 
**private_key** | **str** |  | [optional] 
**private_key_pass** | **str** |  | [optional] 
**is_assertion_encrypted** | **bool** |  | [optional] 
**enc_private_key** | **str** |  | [optional] 
**enc_private_key_pass** | **str** |  | [optional] 

## Example

```python
from better_auth.models.sso_register_post_request_saml_config_sp_metadata import SsoRegisterPostRequestSamlConfigSpMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of SsoRegisterPostRequestSamlConfigSpMetadata from a JSON string
sso_register_post_request_saml_config_sp_metadata_instance = SsoRegisterPostRequestSamlConfigSpMetadata.from_json(json)
# print the JSON string representation of the object
print(SsoRegisterPostRequestSamlConfigSpMetadata.to_json())

# convert the object into a dict
sso_register_post_request_saml_config_sp_metadata_dict = sso_register_post_request_saml_config_sp_metadata_instance.to_dict()
# create an instance of SsoRegisterPostRequestSamlConfigSpMetadata from a dict
sso_register_post_request_saml_config_sp_metadata_from_dict = SsoRegisterPostRequestSamlConfigSpMetadata.from_dict(sso_register_post_request_saml_config_sp_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



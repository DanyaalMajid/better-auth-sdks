# SsoRegisterPostRequestSamlConfigIdpMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | **str** |  | 
**private_key** | **str** |  | [optional] 
**private_key_pass** | **str** |  | [optional] 
**is_assertion_encrypted** | **bool** |  | [optional] 
**enc_private_key** | **str** |  | [optional] 
**enc_private_key_pass** | **str** |  | [optional] 

## Example

```python
from better_auth.models.sso_register_post_request_saml_config_idp_metadata import SsoRegisterPostRequestSamlConfigIdpMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of SsoRegisterPostRequestSamlConfigIdpMetadata from a JSON string
sso_register_post_request_saml_config_idp_metadata_instance = SsoRegisterPostRequestSamlConfigIdpMetadata.from_json(json)
# print the JSON string representation of the object
print(SsoRegisterPostRequestSamlConfigIdpMetadata.to_json())

# convert the object into a dict
sso_register_post_request_saml_config_idp_metadata_dict = sso_register_post_request_saml_config_idp_metadata_instance.to_dict()
# create an instance of SsoRegisterPostRequestSamlConfigIdpMetadata from a dict
sso_register_post_request_saml_config_idp_metadata_from_dict = SsoRegisterPostRequestSamlConfigIdpMetadata.from_dict(sso_register_post_request_saml_config_idp_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



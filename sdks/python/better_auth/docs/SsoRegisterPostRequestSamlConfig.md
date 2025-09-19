# SsoRegisterPostRequestSamlConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entry_point** | **str** | The entry point of the provider | 
**cert** | **str** | The certificate of the provider | 
**callback_url** | **str** | The callback URL of the provider | 
**audience** | **str** |  | [optional] 
**idp_metadata** | [**SsoRegisterPostRequestSamlConfigIdpMetadata**](SsoRegisterPostRequestSamlConfigIdpMetadata.md) |  | [optional] 
**sp_metadata** | [**SsoRegisterPostRequestSamlConfigSpMetadata**](SsoRegisterPostRequestSamlConfigSpMetadata.md) |  | 
**want_assertions_signed** | **bool** |  | [optional] 
**signature_algorithm** | **str** |  | [optional] 
**digest_algorithm** | **str** |  | [optional] 
**identifier_format** | **str** |  | [optional] 
**private_key** | **str** |  | [optional] 
**decryption_pvk** | **str** |  | [optional] 
**additional_params** | **str** |  | [optional] 

## Example

```python
from better_auth.models.sso_register_post_request_saml_config import SsoRegisterPostRequestSamlConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SsoRegisterPostRequestSamlConfig from a JSON string
sso_register_post_request_saml_config_instance = SsoRegisterPostRequestSamlConfig.from_json(json)
# print the JSON string representation of the object
print(SsoRegisterPostRequestSamlConfig.to_json())

# convert the object into a dict
sso_register_post_request_saml_config_dict = sso_register_post_request_saml_config_instance.to_dict()
# create an instance of SsoRegisterPostRequestSamlConfig from a dict
sso_register_post_request_saml_config_from_dict = SsoRegisterPostRequestSamlConfig.from_dict(sso_register_post_request_saml_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



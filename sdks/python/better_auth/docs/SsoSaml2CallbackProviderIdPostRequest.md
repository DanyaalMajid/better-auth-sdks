# SsoSaml2CallbackProviderIdPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**saml_response** | **str** |  | 
**relay_state** | **str** |  | [optional] 

## Example

```python
from better_auth.models.sso_saml2_callback_provider_id_post_request import SsoSaml2CallbackProviderIdPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SsoSaml2CallbackProviderIdPostRequest from a JSON string
sso_saml2_callback_provider_id_post_request_instance = SsoSaml2CallbackProviderIdPostRequest.from_json(json)
# print the JSON string representation of the object
print(SsoSaml2CallbackProviderIdPostRequest.to_json())

# convert the object into a dict
sso_saml2_callback_provider_id_post_request_dict = sso_saml2_callback_provider_id_post_request_instance.to_dict()
# create an instance of SsoSaml2CallbackProviderIdPostRequest from a dict
sso_saml2_callback_provider_id_post_request_from_dict = SsoSaml2CallbackProviderIdPostRequest.from_dict(sso_saml2_callback_provider_id_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



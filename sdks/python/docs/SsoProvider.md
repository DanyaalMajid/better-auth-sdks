# SsoProvider


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**issuer** | **str** |  | 
**oidc_config** | **str** |  | [optional] 
**saml_config** | **str** |  | [optional] 
**user_id** | **str** |  | [optional] 
**provider_id** | **str** |  | 
**organization_id** | **str** |  | [optional] 
**domain** | **str** |  | 

## Example

```python
from better_auth.models.sso_provider import SsoProvider

# TODO update the JSON string below
json = "{}"
# create an instance of SsoProvider from a JSON string
sso_provider_instance = SsoProvider.from_json(json)
# print the JSON string representation of the object
print(SsoProvider.to_json())

# convert the object into a dict
sso_provider_dict = sso_provider_instance.to_dict()
# create an instance of SsoProvider from a dict
sso_provider_from_dict = SsoProvider.from_dict(sso_provider_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



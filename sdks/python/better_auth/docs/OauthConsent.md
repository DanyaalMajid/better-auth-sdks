# OauthConsent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**client_id** | **str** |  | [optional] 
**user_id** | **str** |  | [optional] 
**scopes** | **str** |  | [optional] 
**created_at** | **str** |  | [optional] 
**updated_at** | **str** |  | [optional] 
**consent_given** | **bool** |  | [optional] 

## Example

```python
from better_auth.models.oauth_consent import OauthConsent

# TODO update the JSON string below
json = "{}"
# create an instance of OauthConsent from a JSON string
oauth_consent_instance = OauthConsent.from_json(json)
# print the JSON string representation of the object
print(OauthConsent.to_json())

# convert the object into a dict
oauth_consent_dict = oauth_consent_instance.to_dict()
# create an instance of OauthConsent from a dict
oauth_consent_from_dict = OauthConsent.from_dict(oauth_consent_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



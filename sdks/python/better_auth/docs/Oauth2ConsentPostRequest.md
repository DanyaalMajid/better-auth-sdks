# Oauth2ConsentPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accept** | **bool** | Whether the user accepts or denies the consent request | 
**consent_code** | **str** | The consent code from the authorization request. Optional if using cookie-based flow. | [optional] 

## Example

```python
from better_auth.models.oauth2_consent_post_request import Oauth2ConsentPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of Oauth2ConsentPostRequest from a JSON string
oauth2_consent_post_request_instance = Oauth2ConsentPostRequest.from_json(json)
# print the JSON string representation of the object
print(Oauth2ConsentPostRequest.to_json())

# convert the object into a dict
oauth2_consent_post_request_dict = oauth2_consent_post_request_instance.to_dict()
# create an instance of Oauth2ConsentPostRequest from a dict
oauth2_consent_post_request_from_dict = Oauth2ConsentPostRequest.from_dict(oauth2_consent_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



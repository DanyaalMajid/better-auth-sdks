# Oauth2ConsentPost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**redirect_uri** | **str** | The URI to redirect to, either with an authorization code or an error | 

## Example

```python
from better_auth.models.oauth2_consent_post200_response import Oauth2ConsentPost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of Oauth2ConsentPost200Response from a JSON string
oauth2_consent_post200_response_instance = Oauth2ConsentPost200Response.from_json(json)
# print the JSON string representation of the object
print(Oauth2ConsentPost200Response.to_json())

# convert the object into a dict
oauth2_consent_post200_response_dict = oauth2_consent_post200_response_instance.to_dict()
# create an instance of Oauth2ConsentPost200Response from a dict
oauth2_consent_post200_response_from_dict = Oauth2ConsentPost200Response.from_dict(oauth2_consent_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



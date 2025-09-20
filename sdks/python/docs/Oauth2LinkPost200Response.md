# Oauth2LinkPost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** | The authorization URL to redirect the user to for linking the OAuth2 account | 
**redirect** | **bool** | Indicates that the client should redirect to the provided URL | 

## Example

```python
from better_auth.models.oauth2_link_post200_response import Oauth2LinkPost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of Oauth2LinkPost200Response from a JSON string
oauth2_link_post200_response_instance = Oauth2LinkPost200Response.from_json(json)
# print the JSON string representation of the object
print(Oauth2LinkPost200Response.to_json())

# convert the object into a dict
oauth2_link_post200_response_dict = oauth2_link_post200_response_instance.to_dict()
# create an instance of Oauth2LinkPost200Response from a dict
oauth2_link_post200_response_from_dict = Oauth2LinkPost200Response.from_dict(oauth2_link_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



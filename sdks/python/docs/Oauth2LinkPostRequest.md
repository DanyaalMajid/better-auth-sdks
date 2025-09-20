# Oauth2LinkPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provider_id** | **str** |  | 
**callback_url** | **str** |  | 
**scopes** | **List[object]** | Additional scopes to request when linking the account | [optional] 
**error_callback_url** | **str** | The URL to redirect to if there is an error during the link process | [optional] 

## Example

```python
from better_auth.models.oauth2_link_post_request import Oauth2LinkPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of Oauth2LinkPostRequest from a JSON string
oauth2_link_post_request_instance = Oauth2LinkPostRequest.from_json(json)
# print the JSON string representation of the object
print(Oauth2LinkPostRequest.to_json())

# convert the object into a dict
oauth2_link_post_request_dict = oauth2_link_post_request_instance.to_dict()
# create an instance of Oauth2LinkPostRequest from a dict
oauth2_link_post_request_from_dict = Oauth2LinkPostRequest.from_dict(oauth2_link_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



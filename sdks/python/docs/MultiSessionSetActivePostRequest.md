# MultiSessionSetActivePostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**session_token** | **str** | The session token to set as active | 

## Example

```python
from better_auth.models.multi_session_set_active_post_request import MultiSessionSetActivePostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of MultiSessionSetActivePostRequest from a JSON string
multi_session_set_active_post_request_instance = MultiSessionSetActivePostRequest.from_json(json)
# print the JSON string representation of the object
print(MultiSessionSetActivePostRequest.to_json())

# convert the object into a dict
multi_session_set_active_post_request_dict = multi_session_set_active_post_request_instance.to_dict()
# create an instance of MultiSessionSetActivePostRequest from a dict
multi_session_set_active_post_request_from_dict = MultiSessionSetActivePostRequest.from_dict(multi_session_set_active_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


